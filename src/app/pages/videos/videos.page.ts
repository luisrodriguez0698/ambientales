import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  id2 = '';

  componentes: Componente[] = [];

  constructor( private menuCtrl: MenuController, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id2 = this.activatedRoute.snapshot.paramMap.get('id');
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
