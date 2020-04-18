import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plantilla1',
  templateUrl: './plantilla1.page.html',
  styleUrls: ['./plantilla1.page.scss'],
})
export class Plantilla1Page implements OnInit {

  id2: string;
  temp: Observable<any>;
  componentes: Componente[] = [];

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
      this.temp = this.dataService.getPuntosR();
    } else if (this.id2 == 'PeligroE')
    {
      this.temp = this.dataService.getPeligroE();
    }
  }//fin del metodo
}