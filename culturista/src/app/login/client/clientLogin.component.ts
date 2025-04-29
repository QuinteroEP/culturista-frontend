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

  logInClient(form: NgForm) {
    if (form.invalid) {
      console.error("Formulario inválido");
      return;
    }

    const loginData = {
      correo: form.value.email,
      password: form.value.password
    };

    this.auth.loginClient(loginData).subscribe({
      next: (token) => {
        console.log("Token de cliente recibido:", token);
        if (token) {
          this.auth.saveToken(token);
          this.auth.loggedIn.next(true);
          this.router.navigate(['formulario']);
        } else {
          console.error("No se recibió token");
        }
      },
      error: (err) => {
        console.error("Error al iniciar sesión:", err.error || err.message);
      }
    });
  }
}
