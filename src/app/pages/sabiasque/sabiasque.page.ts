import { Component, OnInit } from '@angular/core';
import { SabiasQue } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Componente } from '../../interfaces/interfaces';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-sabiasque',
  templateUrl: './sabiasque.page.html',
  styleUrls: ['./sabiasque.page.scss'],
})
export class SabiasquePage implements OnInit {

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private menuCtrl: MenuController) { }

  SabiasQue: SabiasQue[] = [];
  temp: Observable<any>;
  id2: string;

  componentes: Componente[] = [];

  ngOnInit() {
    this.id2 = this.activatedRoute.snapshot.paramMap.get('id');
    this.temp = this.dataService.getPuntosR();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }


}
