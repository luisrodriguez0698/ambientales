import { Component, OnInit } from '@angular/core';
import { Componente } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { MenuController } from '@ionic/angular';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

@Component({
  selector: 'app-desafio',
  templateUrl: './desafio.page.html',
  styleUrls: ['./desafio.page.scss'],
})
export class DesafioPage implements OnInit {

  componentes: Componente[] = [];

  constructor(private menuCtrl: MenuController, public videoplayer: VideoPlayer) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  Video1(){
    this.videoplayer.play("/assets/videos/assets/botellas.mp4")
  }

  Video2(){
    this.videoplayer.play("/assets/videos/assets/floresdepapel.mp4")
  }

  Video3(){
    this.videoplayer.play("/assets/videos/assets/video3.mp4")
  }

}
