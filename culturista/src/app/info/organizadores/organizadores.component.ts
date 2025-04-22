import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-organizadores',
  imports: [CommonModule],
  templateUrl: './organizadores.component.html',
  styleUrl: './organizadores.component.css'
})
export class OrganizadoresComponent {
  constructor(private router: Router) { }

  goToRegistro() {
    console.log('showForm');
    this.router.navigate(['organizer/signup']);
  }

}
