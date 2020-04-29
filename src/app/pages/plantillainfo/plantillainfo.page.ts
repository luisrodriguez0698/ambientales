import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { PeligroE, PuntosR, Coordenadas } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform, LoadingController } from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'app-plantillainfo',
  templateUrl: './plantillainfo.page.html',
  styleUrls: ['./plantillainfo.page.scss'],
})
export class PlantillainfoPage implements OnInit {

  map: any;
  markers: any;

  id: any;
  cate: any;
  Coorde: any;

  PeligroE: Observable<PeligroE[]>;
  PuntosR: Observable<PuntosR[]>;
  Coordenadas = []


  constructor(private activatedRoute: ActivatedRoute, private modalCtrl: ModalController, private navParams: NavParams, 
  private dataService: DataService, private geolocation: Geolocation, public platform: Platform, private loadingCtrol: LoadingController) {
   }

  ngOnInit() {
    this.id = this.navParams.get('id');
    this.cate = this.navParams.get('cate');

    this.Comprobar();

  }

  CerrarModal() {
    this.modalCtrl.dismiss();
  }

  Comprobar(){
    console.log(this.cate);
    if (this.cate == "PE") {
      this.PeligroE = this.dataService.getPeligroE();
    } else if(this.cate == "PR"){
      this.PuntosR = this.dataService.getPuntosR();
      this.dataService.getCoordenadas().subscribe((data) => {
        this.Coordenadas = data;
      });

      this.platform.ready().then(() => {
        this.initPage();
      });
    }
  }

  async initPage() {
    this.geolocation.getCurrentPosition().then(result => {
      this.loadMap(result.coords.latitude, result.coords.longitude);
    });
  }

  async loadMap(lat, lng) {

    let latLng = new google.maps.LatLng(lat, lng);

    let mapOptions =  {
      center: latLng,
      zoom: 14
    };

    let element = document.getElementById('mape');

    this.map = new google.maps.Map(element, mapOptions);
    let marker = new google.maps.Marker({
      position: latLng,
      title: 'Mi Ubicacion',
    })

    let content = `
      <div id="myid" class="item item-thumbnail-left item-text-wrap">
        <ion-item>
          <ion-row>
            <h6>`+marker.title+`</h6>
            <img src="../../../assets/icon/img/estacionamiento.jpg" alt="img" width="50%" height="100" align="middle">
          </ion-row>
        </ion-item>
      </div>
      `
      ;
      this.addInfoWindow(marker, content);
      marker.setMap(this.map);

      this.loadPoints();
  }

  loadPoints() {
    this.markers = [];

    for (const key of this.Coordenadas) {
        console.log(key)
      let latLng = new google.maps.LatLng(key.latitude, key.longitude);

      let marker = new google.maps.Marker({
        position: latLng,
        title: key.name
      })


      let content = `
      <ion-header>
      <center>
            <img src="../../../assets/icon/img/`+key.Imagen+`" alt="img" width="50%" height="100" align="middle">  
      </center>
      </ion-header>

      <div id="myid"  class="item item-thumbnail-left item-text-wrap">
        <ion-item>
        <ion-row>
        <h6>`+key.name+`</h6>
      </ion-row>
      </ion-item><ion-row>
        <h6>`+key.des+`</h6>
      </ion-row>
      </ion-item><ion-row>
        <h6>`+key.tel+`</h6>
      </ion-row>
      </ion-item>
      </div>
      `
      ;
      this.addInfoWindow(marker, content);
      marker.setMap(this.map);
    }

    return this.markers;
  }


  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);

      google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
        document.getElementById('myid').addEventListener('click', () => {
          this.goToEmpresa(marker)
        });
      });
    })
  }


  goToEmpresa(empresa) {
    alert('Click');
  }

  }
