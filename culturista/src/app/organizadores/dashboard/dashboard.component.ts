import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { destino } from 'src/app/entity/destino';
import { guia } from 'src/app/entity/guia';
import { CommonModule } from '@angular/common';
import { organizadorService } from 'src/app/service/organizadorService';
import { destinoService } from 'src/app/service/destinoService';
import { guiaService } from 'src/app/service/guiaService';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  listaDestinos!: destino[];
  listaGuias!: guia[];

  constructor(
    private router: Router,
    private organizadorService: organizadorService,
    private destinoService: destinoService,
    private guiaService: guiaService) { }

  ngOnInit() {
    this.organizadorService.getDestinies(1).subscribe(
      (destinos) => {
        this.listaDestinos = destinos;
      }
    );

    this.guiaService.findAll().subscribe(
      (guias) => {
        this.listaGuias = guias;
      }
    );
  }

  eliminarDestino(id: number) {
    this.destinoService.deleteDestino(id).subscribe(
      (response) => {
        console.log('Destino eliminado:', response);
        this.listaDestinos = this.listaDestinos.filter(destino => destino.id !== id);
      },
      (error) => {
        console.error('Error al eliminar el destino:', error);
      }
    );
  }

  informacionDestino(id: number) {
    this.router.navigate(['/destinos', 'info', id]);
  }

  agregarDestino(){
    this.router.navigate(['/destinos/crear'], { queryParams: { modo: 'agregar' } });
  }

  actualizarDestino(id: number) {
    this.router.navigate(['/destinos/crear'], { queryParams: { modo: 'editar', id } });
  }

  eliminarGuia(id: number) {
    this.guiaService.deleteGuia(id).subscribe(
      (response) => {
        console.log('Guia eliminado:', response);
        this.listaGuias = this.listaGuias.filter(guia => guia.id !== id);
      },
      (error) => {
        console.error('Error al eliminar el guia:', error);
      }
    );
  }

  informacionGuia(id: number) {
    this.router.navigate(['/guias', 'informacion', id]);
  }

  agregarGuia(){
    this.router.navigate(['/guias/crear'], { queryParams: { modo: 'agregar' } });
  }

  actualizaGuia(id: number) {
    this.router.navigate(['/guias/crear'], { queryParams: { modo: 'editar', id } });
  }

}
