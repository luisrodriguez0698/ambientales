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
  temp: 1;

  PeligroE: Observable<PeligroE[]>;

  constructor(private activatedRoute: ActivatedRoute, private modalCtrl: ModalController, private navParams: NavParams, 
    private dataService: DataService) {
   }

  ngOnInit() {
    this.PeligroE = this.dataService.getPeligroE();
    this.id = this.navParams.get('id');
    console.log(this.id);
  }


  CerrarModal() {
    this.modalCtrl.dismiss();
  }

  uno() {
    console.log(this.id);
  }

}
