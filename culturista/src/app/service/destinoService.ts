import { Injectable } from '@angular/core';
import { destino } from '../entity/destino';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class destinoService {

  constructor(
    private http: HttpClient

  ) { }


  findAll(): Observable<destino[]>{
    return this.http.get<destino[]>('http://localhost:8090/destino/all');
  }

  findById(id:number):Observable<destino>{
    return this.http.get<destino>('http://localhost:8090/destino/informacion/'+id);
  }
}