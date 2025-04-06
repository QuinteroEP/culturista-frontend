import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/authService';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router, private auth: AuthService) { }

  goToRegistro(){
    this.router.navigate(['signup']);
  }

  goToForm(form: NgForm){
    this.auth.login();
    this.router.navigate(['formulario']);
  }
}
