import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { destino } from '../entity/destino';
import { destinoService } from 'src/app/service/destinoService';
import { CommonModule } from '@angular/common';
import { planService } from '../service/planService';
import { guia } from '../entity/guia';
import { guiaService } from 'src/app/service/guiaService';
import { forkJoin } from 'rxjs';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-plan',
  imports: [CommonModule],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css'
})
export class PlanComponent {
  listaDestinos!: destino[];
  listaIds!: number[];

  listaGuias!: guia[];
  listaGuiasIds!: number[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private destinoService: destinoService,
    private guiaService: guiaService,
    private plan: planService) { }

    ngOnInit() {
      this.listaIds = this.plan.loadDestiniesIds();
      this.listaGuiasIds = this.plan.loadGuidesIds();

      console.log("Lista de eventos: ");
      this.listaIds.forEach((id) => {
        console.log("ID: " + id);
      });

      console.log("Lista de guias: ");
      this.listaGuiasIds.forEach((id) => {
        console.log("ID: " + id);
      });

      const observablesDestinies = this.listaIds.map(id => this.destinoService.findById(id));
      const observablesGuides = this.listaGuiasIds.map(id => this.guiaService.findById(id));

      // Use forkJoin to subscribe to all observables
      forkJoin(observablesDestinies).subscribe(
        (results) => {
          this.listaDestinos = results;
        },
        (error) => {
          console.error('Error fetching details for IDs:', error);
        }
      );

      forkJoin(observablesGuides).subscribe(
        (results) => {
          this.listaGuias = results;
        },
        (error) => {
          console.error('Error fetching details for IDs:', error);
        }
      );
    }

    generatePDF(){
      const doc = new jsPDF();

      doc.setFontSize(16);
		  doc.text('Mi plan de viaje', 10, 10);

      doc.save('Mi Plan.pdf');
    }
}
