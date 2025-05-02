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
  constructor(private router: Router, private auth: AuthService) { }
  
  logInOrganizer(form: NgForm) {
    if (form.invalid) {
      console.error("Formulario inválido");
      return;
    }

    const loginData = {
      correo: form.value.correo,
      password: form.value.password
    };

    console.log("Datos de inicio de sesión:", loginData);

    this.auth.loginOrg(loginData).subscribe({
      next: (token) => {
        console.log("Token de organizador recibido:", token);
        if (token) {
          this.auth.saveToken(token);
          this.auth.loggedIn.next(true);
          this.auth.organizer = true;
          console.log("Organizador: " + this.auth.organizer);
          this.router.navigate(['organizer/dashboard']);
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
