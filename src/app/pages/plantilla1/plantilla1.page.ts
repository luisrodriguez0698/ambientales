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
  temp = []
  componentes: Componente[] = [];

  PuntosR2 = [];

  PeligroE2 = [];


  constructor( private menuCtrl: MenuController, private activatedRoute: ActivatedRoute,  private dataService: DataService) { }

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
      this.dataService.getPuntosR().subscribe((data: any) => {
        this.temp = data;       
      });

    } else if (this.id2 == 'PeligroE')
    {
      this.dataService.getPeligroE().subscribe((data: any) => {
        this.temp = data;       
       });

    }
    }//fin del metodo
}
