import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { AuthService } from "../../services/auth.service";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>;

  constructor( private dataService: DataService, public authservice:AuthService, public alertController: AlertController) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOps();
  }

  async CerrarSesion() {
    const alert = await this.alertController.create({
      header: 'Cerrar Sesion!',
      message: '¿Esta Seguro que desea Cerrar Sesion?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Si',
          handler: () => {
            this.Onlogout();
          }
        }
      ]
    });

    await alert.present();
  }

  Onlogout()
  {
    this.authservice.logout();
  }

}
