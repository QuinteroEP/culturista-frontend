import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../service/authService';

@Component({
  selector: 'app-clientLogin',
  imports: [FormsModule],
  templateUrl: './clientLogin.component.html',
  styleUrl: './clientLogin.component.css'
})
export class ClientLoginComponent {

  constructor(private router: Router, private auth: AuthService) { }

  goToRegistro(){
    this.router.navigate(['client/signup']);
  }

  goToForm(form: NgForm){
    this.auth.login();
    this.router.navigate(['formulario']);
  }
}
