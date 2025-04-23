import { Injectable } from '@angular/core';
import { viajero } from '../entity/viajero';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class accountService {

  constructor(
    private http: HttpClient) { }

  findById(id: number): Observable<viajero> {
    return this.http.get<viajero>(`http://localhost:8090/usuario/viajero/informacion/${id}`);
  }
}