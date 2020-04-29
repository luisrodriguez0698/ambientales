import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { PuntosR } from '../interfaces/interfaces';
import { PeligroE } from '../interfaces/interfaces';
import { Videos } from '../interfaces/interfaces';
import { Coordenadas } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getMenuOps() {
    return this.http.get<Componente[]>('assets/data/menu.json');
  }

  getPuntosR() {
    return this.http.get<PuntosR[]>('assets/data/PuntosR.json');
  }

  getPeligroE() {
    return this.http.get<PeligroE[]>('assets/data/PeligroE.json');
  }

  getVideos() {
    return this.http.get<Videos[]>('assets/data/Videos.json');
  }

  getCoordenadas() {
    return this.http.get<Coordenadas[]>('assets/data/Coordenadas.json');
  }
}
