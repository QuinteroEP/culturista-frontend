import { Component } from '@angular/core';
import { destino } from '../entity/destino';
import { destinoService } from 'src/app/service/destinoService';
import { CommonModule } from '@angular/common';
import { planService } from '../service/planService';
import { guia } from '../entity/guia';
import { guiaService } from 'src/app/service/guiaService';
import { forkJoin } from 'rxjs';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { logoBase64 } from '../service/logoBase64';


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
    private destinoService: destinoService,
    private guiaService: guiaService,
    private plan: planService,
    private logo: logoBase64) { }

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
      doc.setFont("helvetica", "bold");
		  doc.text('Mi plan de viaje a ' + this.plan.destiny, 10, 10);

      const logo = this.logo.logoString;
      doc.addImage(logo, 'PNG', 170, 10, 20, 20);

      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text("(" + this.plan.dateS + " - " + this.plan.dateE + ")\n", 10, 20);

      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
		  doc.text('Mis Actividades\n', 20, 40);

      const headerDestinos = [['Nombre', 'Descripcion', 'Precio' ,'Fecha']];
      const dataDestinos = this.listaDestinos.map(dest => [dest.nombre, dest.descripcion, dest.precio, dest.fecha]);

      autoTable(doc, {
        head: headerDestinos,
        body: dataDestinos,
        startY: 45,
      });
      var currentY = (this.listaIds.length * 10) + 60;

      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
		  doc.text('Mis Guias\n', 20, currentY);

      const headerGuias = [['Nombre', 'Correo','Calificaicon']];
      const dataGuias = this.listaGuias.map(guia => [guia.nombre, guia.correo, guia.puntaje]);

      autoTable(doc, {
        head: headerGuias,
        body: dataGuias,
        startY: currentY+5,
      });
      
      currentY = (this.listaGuiasIds.length * 10) + currentY;

      doc.setFontSize(10);
      doc.setFont("helvetica", "italic");
      doc.text(this.plan.name + ", listo para viajar?\n", 10, currentY + 20);

      doc.setFontSize(8);
      doc.text("CulTurista - Universidad Javeriana", 10, currentY + 25);

      doc.save('Mi Plan.pdf');
    }
}
