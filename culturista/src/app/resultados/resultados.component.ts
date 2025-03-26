import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultados',
  imports: [],
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css'
})
export class ResultadosComponent {
  constructor(private router: Router) { }

  goToGuides(){
    this.router.navigate(['/formulario', 'guias']);
  }

  goToInfo(){
    this.router.navigate(['/destinos', 'info']);
  }
}
