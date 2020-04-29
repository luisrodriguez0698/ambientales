import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform, LoadingController } from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'app-ubiaciones',
  templateUrl: './ubiaciones.page.html',
  styleUrls: ['./ubiaciones.page.scss'],
})
export class UbiacionesPage implements OnInit {

  map: any;
  markers: any;

  Estacionamiento = [{
    name: 'Estacionamiento',
    des: 'Calle Cuarta Ote. Sur, Asamblea de barrio, Centro, 29000 Tuxtla Gutiérrez, Chis.',
    latitude: 16.7525713,
    longitude: -93.1130686,
    tel: '961-202-1831',
    Imagen: 'estacionamiento.jpg'
  },{
    name: 'Estacionamiento Publico',
    des: 'Calle Primera Pte. Sur, Centro, 29000 Tuxtla Gutiérrez, Chis.',
    latitude: 16.7543901,
    longitude: -93.1178685,
    tel: '961-613-2468',
    Imagen: 'estacionamiento.jpg'
  },{
    name: 'Estacionamiento Público',
    des: 'Calle 2a. Ote. Nte. 2504, Centro, 29000 Tuxtla Gutiérrez, Chis.',
    latitude: 16.7549476,
    longitude: -93.1138467,
    tel: '961-165-7831',
    Imagen: 'estacionamiento.jpg'
  },{
    name: 'Estacionamiento Público',
    des: 'Av. 4a. Sur Ote. 242, Asamblea de barrio, San Roque, 29000 Tuxtla Gutiérrez, Chis.',
    latitude: 16.7499512,
    longitude: -93.1155983,
    tel: '961-126-8715',
    Imagen: 'estacionamiento.jpg'
  },{
    name: 'DAXADE',
    des: 'Av. 1a. Nte. Pte. 1015, Guadalupe, 29000 Tuxtla Gutiérrez, Chis.',
    latitude: 16.7558997,
    longitude: -93.1239805,
    tel: '961-274-5537',
    Imagen: 'estacionamiento.jpg'
  },{
    name: 'Estacionamiento Público',
    des: 'Av 2a. Sur Pte 258, El Calvario, 29000 Tuxtla Gutiérrez, Chis.',
    latitude: 16.7520925,
    longitude: -93.1177392,
    tel: '',
    Imagen: 'estacionamiento.jpg'
  },{
    name: 'Estacionamiento Público',
    des: 'Av 1a. Sur Pte 243, El Calvario, 29000 Tuxtla Gutiérrez, Chis.',
    latitude: 16.7526158,
    longitude: -93.1177106,
    tel: '961-612-3496',
    Imagen: 'estacionamiento.jpg'
  },{
    name: 'Estacionamiento Arce',
    des: '30540, Av 1a. Sur Pte 519, El Cerrito, Tuxtla Gutiérrez, Chis.',
    latitude: 16.753246,
    longitude: -93.1199365,
    tel: '',
    Imagen: 'estacionamiento.jpg'
  }];

  constructor( private geolocation: Geolocation, public platform: Platform, private loadingCtrol: LoadingController) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.initPage();
    });
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

    for (const key of Object.keys(this.Estacionamiento)) {
      console.log(this.Estacionamiento[key].name)
      let latLng = new google.maps.LatLng(this.Estacionamiento[key].latitude, this.Estacionamiento[key].longitude);

      let marker = new google.maps.Marker({
        position: latLng,
        title: this.Estacionamiento[key].name
      })

      let content = `
      <ion-header>
      <center>
            <img src="../../../assets/icon/img/`+this.Estacionamiento[key].Imagen+`" alt="img" width="50%" height="100" align="middle">  
      </center>
      </ion-header>

      <div id="myid"  class="item item-thumbnail-left item-text-wrap">
        <ion-item>
        <ion-row>
        <h6>`+this.Estacionamiento[key].name+`</h6>
      </ion-row>
      </ion-item><ion-row>
        <h6>`+this.Estacionamiento[key].des+`</h6>
      </ion-row>
      </ion-item><ion-row>
        <h6>`+this.Estacionamiento[key].tel+`</h6>
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
