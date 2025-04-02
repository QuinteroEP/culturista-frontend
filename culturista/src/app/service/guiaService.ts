import { Injectable } from '@angular/core';
import { guia } from '../entity/guia';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class guiaService {

  constructor(
    private http: HttpClient

  ) { }


  findAll(): Observable<guia[]>{
    return this.http.get<guia[]>('http://localhost:8090/guias/all');
  }

  findById(id:number):Observable<guia>{
    return this.http.get<guia>('http://localhost:8090/guias/informacion/'+id);
  }
}