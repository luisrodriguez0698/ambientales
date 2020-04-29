import { Component, OnInit } from '@angular/core';
import { Componente } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-desafio',
  templateUrl: './desafio.page.html',
  styleUrls: ['./desafio.page.scss'],
})
export class DesafioPage implements OnInit {

  componentes: Componente[] = [];

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  public p1 = [
    { val: 'opcion 1'},
    { val: 'opcion 2'},
    { val: 'opcion 3'},
    { val: 'opcion 4'}
  ];

  public p2 = [
    { val: 'opcion 1'},
    { val: 'opcion 2'},
    { val: 'opcion 3'},
    { val: 'opcion 4'}
  ];

}
