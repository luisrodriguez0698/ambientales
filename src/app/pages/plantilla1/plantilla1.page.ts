import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { PlantillainfoPage } from '../plantillainfo/plantillainfo.page';

@Component({
  selector: 'app-plantilla1',
  templateUrl: './plantilla1.page.html',
  styleUrls: ['./plantilla1.page.scss'],
})
export class Plantilla1Page implements OnInit {

  id: any;
  id2: string;
  temp: Observable<any>;
  componentes: Componente[] = [];

  constructor(private menuCtrl: MenuController, private activatedRoute: ActivatedRoute, private dataService: DataService,
  private modalCtrl: ModalController) {}

  ngOnInit() {
    this.id2 = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id2);
    this.Comprueba();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  Comprueba() {
    if (this.id2 == 'PuntosR')
    {
      this.temp = this.dataService.getPuntosR();
    } else if (this.id2 == 'PeligroE')
    {
      this.temp = this.dataService.getPeligroE();
    } else if (this.id2 == 'Videos')
    {
      this.temp = this.dataService.getVideos();
    }
  }//fin del metodo

  async AbrirModal() {
    const modal = await this.modalCtrl.create({
      component: PlantillainfoPage,
      componentProps: {
        'id': '1'
      }
    });
    return await modal.present();
  }

}