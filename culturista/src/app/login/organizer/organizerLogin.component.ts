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
      cedula: form.value.cedula,
      password: form.value.password
    };

    console.log("Datos de inicio de sesión:", loginData);

    this.auth.loginOrg(loginData).subscribe({
      next: (response) => {
        console.log("Respuesta del servidor:", response);
        if (response === "Ingreso exitoso") {
          this.auth.loggedIn.next(true); // Update the loggedIn status
          this.router.navigate(['organizer/dashboard']); // Navigate to the desired page after login
        } else {
          console.error("Error inesperado:", response);
        }
      },
      error: (err) => {
        console.error("Error al iniciar sesión:", err.error || err.message);
      }
    });
  }
}
