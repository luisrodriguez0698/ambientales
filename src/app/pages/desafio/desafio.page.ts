import { Component, OnInit } from '@angular/core';
import { Componente } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { MenuController } from '@ionic/angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-desafio',
  templateUrl: './desafio.page.html',
  styleUrls: ['./desafio.page.scss'],
})
export class DesafioPage implements OnInit {

  componentes: Componente[] = [];

  constructor(private menuCtrl: MenuController, private youtube: YoutubeVideoPlayer) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

   Video1(watch) {
    this.youtube.openVideo(watch);
   }
  Video2(watch1) {
    this.youtube.openVideo(watch1);
  }

  Video3(watch2) {
    this.youtube.openVideo(watch2);
  }

}
