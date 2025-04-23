import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clientSignup',
  imports: [FormsModule],
  templateUrl: './clientSignup.component.html',
  styleUrl: './clientSignup.component.css'
})
export class ClientComponentSignup {

  constructor(private router: Router, private http: HttpClient) { }

    registerUser(form: NgForm){
      if(form.value.password !== form.value.confirmarPassword || form.invalid){
        console.log("Las contraseñas no coinciden");
      }
      else{
        const traveler = {
          nombre: form.value.nombre,
          apellido: form.value.apellido,
          correo: form.value.email,
          telefono: form.value.telefono,
          password: form.value.password,
        };

        console.log('Form Data:', form.value);
        console.log('viajero:', traveler);

        this.http.post('http://localhost:8090/usuario/viajero/signup/add', traveler)
        .subscribe({
          next: (response) => {
            console.log("Usuario registrado exitosamente", response);
            this.router.navigate(['formulario']);
          },
          error: (err) => {
            console.error("Error al registrar el usuario(viajero)", err.error);
          }
        });
      }
    }
}
