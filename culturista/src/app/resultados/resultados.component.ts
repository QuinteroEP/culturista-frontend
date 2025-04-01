import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { destino } from '../entity/destino';
import { destinoService } from 'src/app/service/destinoService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultados',
  imports: [CommonModule],
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css'
})
export class ResultadosComponent {
  listaDestinos!: destino[];

  constructor(
    private router: Router,
    private destinoService: destinoService  ) { }

  ngOnInit() {
    this.destinoService.findAll().subscribe(
      (destinos) => {
        this.listaDestinos = destinos;
      }
    );
  }

  goToGuides(){
    this.router.navigate(['/formulario', 'guias']);
  }

  goToInfo(){
    this.router.navigate(['/destinos', 'info']);
  }
}
