import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { guia } from '../entity/guia';
import { guiaService } from 'src/app/service/guiaService';
import { CommonModule } from '@angular/common';
import { planService } from '../service/planService';

@Component({
  selector: 'app-guias',
  imports: [CommonModule],
  templateUrl: './guias.component.html',
  styleUrl: './guias.component.css'
})
export class GuiasComponent {
  listaGuias!: guia[];
  agregados: Set<number> = new Set();

  constructor(
    private router: Router,
    private guiaService: guiaService,
    private plan: planService) { }

  ngOnInit() {
    this.guiaService.findAll().subscribe(
      (guias) => {
        this.listaGuias = guias;
      }
    );
  }

  goToPlan(){
    this.router.navigate(['plan']);
  }

  goToInfo(id: number){
    this.router.navigate(['/guias', 'informacion', id]);
  }

  addToPlan(id: number){
    console.log("Guia agregado: " + id)
    this.plan.saveToGuides(id);
    this.agregados.add(id);
  }
}
