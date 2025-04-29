import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-organizerSignup',
  imports: [FormsModule],
  templateUrl: './organizerSignup.component.html',
  styleUrl: './organizerSignup.component.css'
})
export class OrganizerSignupComponent {
  
  constructor(private router: Router, private http: HttpClient) { }

  errorMessage: string = '';

  registerOrg(form: NgForm) {
    
    if(form.value.password !== form.value.confirmarPassword || form.invalid){
      console.log("Las contraseñas no coinciden");
    }
    else{
      const organizer = {
        nombre: form.value.nombre,
        apellido: form.value.apellido,
        correo: form.value.email,
        telefono: Number(form.value.telefono),
        cedula: Number(form.value.Cedula),
        password: form.value.password,
      };

      console.log('Form Data:', form.value);
      console.log('Organizador:', organizer);

      this.http.post('http://localhost:8090/usuario/organizador/signup/add', organizer)
      .subscribe({
          next: (response) => {
            console.log("Organizador registrado exitosamente", response);
            this.router.navigate(['organizer/dashboard']);
          },
          error: (err) => {
            console.error("Error al registrar el usuario(organizador)", err.error);
            this.errorMessage = "Error: este correo ya está registrado";
          }
      });
    }
  }

  goToLogin() {
    this.router.navigate(['organizer/login']);
  }
}
