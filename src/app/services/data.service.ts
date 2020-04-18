import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { PuntosR } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getMenuOps(){
    return this.http.get<Componente[]>('assets/data/menu.json');
  }

  getPuntosR(){
    return this.http.get<PuntosR[]>('assets/data/PuntosR.json');
  }
}
