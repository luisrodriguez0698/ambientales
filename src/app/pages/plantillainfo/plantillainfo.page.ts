import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { PeligroE } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-plantillainfo',
  templateUrl: './plantillainfo.page.html',
  styleUrls: ['./plantillainfo.page.scss'],
})
export class PlantillainfoPage implements OnInit {

  id: any;
  cate: any;
  temp: any;

  process: any;
  Res: any;

  PeligroE: Observable<PeligroE[]>;

  constructor(private activatedRoute: ActivatedRoute, private modalCtrl: ModalController, private navParams: NavParams, 
    private dataService: DataService) {
   }

  ngOnInit() {
    this.id = this.navParams.get('id');
    this.cate = this.navParams.get('cate');
    console.log(this.cate);

    this.Comprobar();
  }

  CerrarModal() {
    this.modalCtrl.dismiss();
  }

  Comprobar() {
    if (this.cate == 'PE') {
      this.temp = this.VerInfo();

    }else if (this.cate == 'PR') {
      this.temp = this.VerMapa();

    }else if (this.cate == 'V') {
      this.temp = this.VerVideo();
    }

    }

    VerInfo() {
      let element = document.getElementById('Info');

      this.PeligroE = this.dataService.getPeligroE();

      let content = `
      <div *ngFor="let c of PeligroE | async">
        <h2 *ngIf="c.id==id">{{ c.title }}</h2>
      </div>
      `
    }

    VerMapa() {
    }

    VerVideo(){

    }

  }

