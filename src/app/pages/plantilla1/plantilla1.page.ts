import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plantilla1',
  templateUrl: './plantilla1.page.html',
  styleUrls: ['./plantilla1.page.scss'],
})
export class Plantilla1Page implements OnInit {

  id2: any;

  componentes: Componente[] = [];

  PuntosR = [
    {
    subtitle: 'PuntosR',
    title: 'PuntosR',
    desc: 'este es un animal en peligro de extincion',
    img: '../../../assets/img/animales/tigre.jpg'
  },
  {
    subtitle: 'PuntosR 2',
    title: 'PuntosR 2',
    desc: 'este es un animal en peligro de extincion 2',
    img: '../../../assets/img/animales/tigre.jpg'
  }
];

  PeligroE = [
  {
    subtitle: 'PeligroE',
    title: 'PeligroE',
    desc: 'este es un animal en peligro de extincion',
    img: '../../../assets/img/animales/tigre.jpg'
  },
  {
    subtitle: 'PeligroE',
    title: 'PeligroE 2',
    desc: 'este es un animal en peligro de extincion 2',
    img: '../../../assets/img/animales/tigre.jpg'
  }
];


  constructor( private menuCtrl: MenuController, private activatedRoute: ActivatedRoute) { }

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
      this.id2 = this.PuntosR;
    } else if (this.id2 == 'PeligroE')
    {
      this.id2 = this.PeligroE;
    }
    }//fin del metodo
}
