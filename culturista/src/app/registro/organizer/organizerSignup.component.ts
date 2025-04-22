import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-organizerSignup',
  imports: [FormsModule],
  templateUrl: './organizerSignup.component.html',
  styleUrl: './organizerSignup.component.css'
})
export class OrganizerSignupComponent {
  constructor(private router: Router) { }

  goToDashboard(form: NgForm) {
    this.router.navigate(['organizer/dashboard']);
  }
}
