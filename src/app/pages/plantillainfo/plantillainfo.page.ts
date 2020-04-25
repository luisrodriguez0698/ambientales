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

  @Input() id: any;
  temp: 1;

  PeligroE: Observable<PeligroE[]>;

  constructor(private activatedRoute: ActivatedRoute, private modalCtrl: ModalController, private navParams: NavParams, 
    private dataService: DataService) {
    console.log(navParams.get('id'));
   }

  ngOnInit() {
    this.PeligroE = this.dataService.getPeligroE();
  }


  CerrarModal() {
    this.modalCtrl.dismiss();
  }

  uno() {
    console.log(this.id);
  }

}
