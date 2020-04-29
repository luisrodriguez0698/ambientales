import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth, private router: Router, public alertController: AlertController) { }

  login(email: string, password: string) {

    return new Promise((resolve) => {
      this.AFauth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
        this.router.navigate(['/inicio'])
      }).catch(err => {
        this.ContraseñaNo();
      });
    })
  }

  async ContraseñaNo() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Usuario o contraseña es incorrecta',
      buttons: ['OK']
    });
    await alert.present();
  }

  logout() {
    this.AFauth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  register(email: string, password: string) {

    return new Promise((resolve, reject) => {
      this.AFauth.createUserWithEmailAndPassword(email, password).then(res => {
        console.log(res.user.uid);
        resolve(res)
      }).catch(err => reject (err))
    })
  }
}
