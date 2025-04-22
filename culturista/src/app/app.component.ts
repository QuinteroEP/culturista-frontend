import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true, // Mark as standalone
  imports: [HeaderComponent, 
            RouterModule, 
            FooterComponent, 
            HttpClientModule], // Import standalone components and RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'culturista';
}
