import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [LandingComponent, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'culturista';
}
