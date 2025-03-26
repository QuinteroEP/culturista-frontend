import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informacion',
  imports: [],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionComponent {

  constructor(private router: Router) { }

  returnToForm(){
    this.router.navigate(['/formulario', 'resultados']);
  }
}
