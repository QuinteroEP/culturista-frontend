import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { destino } from '../entity/destino';
import { destinoService } from 'src/app/service/destinoService';
import { CommonModule } from '@angular/common';
import { planService } from '../service/planService';

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
    private destinoService: destinoService,
    private plan: planService) { }

  ngOnInit() {
    console.log(this.listaDestinos);
    const storedDestinos = sessionStorage.getItem('listaDestinos');

    if (storedDestinos != undefined) {
      try {
        this.listaDestinos = storedDestinos ? JSON.parse(storedDestinos) : [];
      } catch (e) {
        console.error('no JSON in sessionStorage:', e);
        this.listaDestinos = [];
      }
    }
    else{
      this.listaDestinos = [];

      this.route.queryParams.subscribe(params => {
        console.log('Received Params:', params);

        const actividades: string[] = params['actividades']
        ? Array.isArray(params['actividades'])
          ? params['actividades']
          : params['actividades'].split(',')
          : [];

        this.destinoService.filterList(
          actividades,
          params['destino'],
          params['inicio'],
          params['fin'],
          params['presupuesto'],
          params['viajeros'],
        ).subscribe(destinos => {
          this.listaDestinos = destinos;
          sessionStorage.setItem('listaDestinos', JSON.stringify(this.listaDestinos));
        });
      });
    }
  }

  goToGuides(){
    this.router.navigate(['/formulario', 'guias']);
  }

  goToInfo(id: number){
    console.log("ID: " + id)

    this.router.navigate(['/destinos', 'info', id]);
  }

  addToPlan(id: number, event:any){
    console.log("Evento agregado: " + id)
    this.plan.saveToDestinies(id);

    event.target.disabled = true;
  }
}
