import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { LandingComponent } from './landing/landing.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [ HeaderComponent, RouterModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'culturista';
}
