import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clientSignup',
  imports: [FormsModule],
  templateUrl: './clientSignup.component.html',
  styleUrl: './clientSignup.component.css'
})
export class ClientComponentSignup {

  constructor(private router: Router) { }

  goToForm(form: NgForm){
    this.router.navigate(['formulario']);
  }
}
