import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  Usuario = "";
  Password = "";

  constructor( public router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  Login() {
    const { Usuario, Password } = this;
    this.authService.login(Usuario, Password);
  }

}
