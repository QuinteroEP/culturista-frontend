import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // Ensures it's a singleton
})
export class headerService {
  private enabled = new BehaviorSubject<boolean>(true);
}
