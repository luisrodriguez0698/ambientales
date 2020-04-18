import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { PuntosR } from '../../interfaces/interfaces';
import { PeligroE } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plantilla1',
  templateUrl: './plantilla1.page.html',
  styleUrls: ['./plantilla1.page.scss'],
})
export class Plantilla1Page implements OnInit {

  id2: any;

  componentes: Componente[] = [];

  PuntosR2: Observable<PuntosR[]>;

  PeligroE2: Observable<PeligroE[]>;


  constructor( private menuCtrl: MenuController, private activatedRoute: ActivatedRoute,  private dataService: DataService) { }

  ngOnInit() {

    this.id2 = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id2);

    this.Comprueba();

    this.PuntosR2 = this.dataService.getPuntosR();
    this.PeligroE2 = this.dataService.getPeligroE();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  Comprueba() {
    if (this.id2 == 'PuntosR')
    {
      this.id2 = this.PuntosR2;
      console.log(this.id2);
    } else if (this.id2 == 'PeligroE')
    {
      this.id2 = this.PeligroE2;
    }
    }//fin del metodo
}
