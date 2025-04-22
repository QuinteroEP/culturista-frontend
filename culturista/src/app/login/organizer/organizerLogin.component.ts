import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../service/authService';

@Component({
  selector: 'app-organizerLogin',
  imports: [FormsModule],
  templateUrl: './organizerLogin.component.html',
  styleUrl: './organizerLogin.component.css'
})
export class OrganizerLoginComponent {
  constructor(private router: Router) { }
  
  goToDashboard(form: NgForm) {
    this.router.navigate(['organizer/dashboard']);
  }
}
