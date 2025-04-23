import { Injectable } from '@angular/core';
import { destino } from '../entity/destino';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class organizadorService {

  constructor(
    private http: HttpClient

  ) { }


  getDestinies(id:number):Observable<destino[]>{
    return this.http.get<destino[]>('http://localhost:8090/usuario/organizador/destinos/'+id);
  }
}