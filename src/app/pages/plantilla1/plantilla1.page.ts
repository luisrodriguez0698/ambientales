import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { PuntosR } from '../../interfaces/interfaces';
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

  PeligroE = [
  {
    titulo: 'En peligro de extinción',
    subtitle: ' Probablemente extinta en el medio silvestre',
    title: 'Osos polares',
    desc: 'El aumento en las temperaturas del planeta como resultado del calentamiento global...',
    img: '../../../assets/img/animales/oso-polar.png'
  },
  {
    subtitle: 'Amenazadas',
    title: 'El rinoceronte blanco',
    desc: 'El rinoceronte blanco, con más de tres toneladas y aproximadamente cuatro metros de...',
    img: '../../../assets/img/animales/rinoceronte-blanco.jpg'
  },
  {
    subtitle: 'Sujetas a protección especial',
    title: 'Elefantes',
    desc: 'La venta ilegal de marfil es la principal razón que amenaza a las poblaciones...',
    img: '../../../assets/img/animales/elefantes.jpg'
  }
];


  constructor( private menuCtrl: MenuController, private activatedRoute: ActivatedRoute,  private dataService: DataService) { }

  ngOnInit() {

    this.id2 = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id2);

    this.Comprueba();

    this.PuntosR2 = this.dataService.getPuntosR();
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
      this.id2 = this.PeligroE;
    }
    }//fin del metodo
}
