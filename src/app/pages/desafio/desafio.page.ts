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

  constructor(private menuCtrl: MenuController, private videoPlayer: VideoPlayer) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

   Video1() {
    this.videoPlayer.play('https://www.youtube.com/watch?v=GlGycs7YJO8').then(() => {
    console.log('video completed');
    }).catch(err => {
    console.log(err);
    });
  }

  Video2() {
   this.videoPlayer.play('../../assets/videos/assets/video3.mp4').then(() => {
    console.log('video completed');
    }).catch(err => {
    console.log(err);
    });
  }

  Video3() {
   this.videoPlayer.play('../../assets/videos/assets/video3.mp4').then(() => {
    console.log('video completed');
    }).catch(err => {
    console.log(err);
    });
  }

}
