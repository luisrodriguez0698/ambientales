import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  email = "";
  password = "";
  passwordr = "";

  constructor(private autenticador: AngularFireAuth, public router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  Register() {
    const { email, password, passwordr } = this;
    if (password !== passwordr) {
      this.ContraseñaNo();
    } else {
      try {
        const resultado = this.autenticador.createUserWithEmailAndPassword(email,password);
        this.presentAlert();
        this.router.navigate(['/login']);
      } catch (error) {
        console.dir(error)
      }
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Registro Exitoso',
      message: 'Te has regitrado Correctamente',
      buttons: ['Iniciar Sesion']
    });

    await alert.present();
  }

  async ContraseñaNo() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Gmail invalido o las contraseñas no coinciden',
      buttons: ['OK']
    });

    await alert.present();
  }

}
