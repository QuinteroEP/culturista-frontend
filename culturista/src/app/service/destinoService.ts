import { Injectable } from '@angular/core';
import { destino } from '../entity/destino';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  filterList(tipo: string, ubicacion: string, fecha: string, precio: number, capacidad: number): Observable<destino[]> {
    const params = new HttpParams()
      .set('tipo', tipo)
      .set('ubicacion', ubicacion)
      .set('fecha', fecha)
      .set('precio', precio.toString())
      .set('capacidad', capacidad.toString());

    const url = `http://localhost:8090/destino/resultados/?${params.toString()}`;
    console.log(url);

    return this.http.get<destino[]>('http://localhost:8090/destino/resultados/', { params });
  }
}