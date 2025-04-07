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

  filterList(tipo: string[], ubicacion: string, inicio: Date, fin: Date, precio: number, viajeros: number): Observable<destino[]> {
    let params = new HttpParams();

    tipo.forEach((tipo: string) => {
    params = params.append('tipo', tipo);
    });

    params = params
    .set('ubicacion', ubicacion)
    .set('inicio', inicio.toString().split('T')[0]) // format as yyyy-MM-dd
    .set('fin', fin.toString().split('T')[0])
    .set('precio', precio.toString())
    .set('capacidad', viajeros.toString());

    const url = `http://localhost:8090/destino/resultados/?${params.toString()}`;
    console.log(url);

    return this.http.get<destino[]>('http://localhost:8090/destino/resultados/', { params });
  }
}