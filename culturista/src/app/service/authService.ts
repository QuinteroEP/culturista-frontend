import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // Ensures it's a singleton
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public loggedIn = new BehaviorSubject<boolean>(false);

  public email: string = '';

  public organizer = false;

  logged$ = this.loggedIn.asObservable();

  loginClient(credentials: { correo: string; password: string }): Observable<string> {
    this.email = credentials.correo;
    return this.http.post('http://localhost:8090/usuario/viajero/login', credentials, { responseType: 'text' });
  }

  loginOrg(credentials: { correo: string; password: string }): Observable<string> {
    return this.http.post('http://localhost:8090/usuario/organizador/login', credentials, { responseType: 'text' });
  }

  logout() {
    this.email = '';
    this.loggedIn.next(false);
  }

  isLoggedIn(): boolean {
    return this.loggedIn.value;
  }

  saveToken(token: string) {
    localStorage.setItem('authToken', token);
  }
}
