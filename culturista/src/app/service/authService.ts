import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // Ensures it's a singleton
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  logged$ = this.loggedIn.asObservable();

  login() {
    this.loggedIn.next(true);
  }

  logout() {
    this.loggedIn.next(false);
  }

  isLoggedIn(): boolean {
    return this.loggedIn.value;
  }
}
