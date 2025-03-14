import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [LandingComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'culturista';
}
