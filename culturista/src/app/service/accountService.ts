import { Injectable } from '@angular/core';
import { viajero } from '../entity/viajero';
import { organizador } from '../entity/organizador';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class accountService {

  constructor(
    private http: HttpClient) { }

  findClientById(id: number): Observable<viajero> {
    return this.http.get<viajero>(`http://localhost:8090/usuario/viajero/informacion/${id}`);
  }

  findClientByEmail(correo: string): Observable<viajero> {
    return this.http.get<viajero>(`http://localhost:8090/usuario/viajero/informacion/correo/${correo}`);
  }

  findOrgByEmail(correo: string): Observable<organizador> {
    return this.http.get<organizador>(`http://localhost:8090/usuario/viajero/informacion/correo/${correo}`);
  }
}