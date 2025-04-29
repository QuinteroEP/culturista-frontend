import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { destino } from 'src/app/entity/destino';
import { guia } from 'src/app/entity/guia';
import { CommonModule } from '@angular/common';
import { organizadorService } from 'src/app/service/organizadorService';
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

}
