import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  constructor(private router: Router) { }
  
  showForm() {
    console.log('showForm');
    this.router.navigate(['formulario']);
  }
}
