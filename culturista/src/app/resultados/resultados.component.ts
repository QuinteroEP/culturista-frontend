import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private destinoService: destinoService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('Received Params:', params);
  
      // Now, you can use the parameters to filter the list
      this.destinoService.filterList(
        params['actividades'] ? params['actividades'].split(',') : [], // Convert activities back to array
        params['destino'],
        params['fecha'],
        params['presupuesto'],
        params['viajeros'],
      ).subscribe(destinos => {
        this.listaDestinos = destinos;
      });
    });
  }

  goToGuides(){
    this.router.navigate(['/formulario', 'guias']);
  }

  goToInfo(id: number){
    console.log("ID: " + id)

    this.router.navigate(['/destinos', 'info', id]);
  }
}
