import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { guia } from '../entity/guia';
import { guiaService } from 'src/app/service/guiaService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guias',
  imports: [CommonModule],
  templateUrl: './guias.component.html',
  styleUrl: './guias.component.css'
})
export class GuiasComponent {
  listaGuias!: guia[];

  constructor(
    private router: Router,
    private guiaService: guiaService) { }

  ngOnInit() {
    this.guiaService.findAll().subscribe(
      (guias) => {
        this.listaGuias = guias;
      }
    );
  }

  email1 = 'jitter@kim.com';
  email2 = 'andres@puj.co';
  goToPlan(){
    this.router.navigate(['plan']);
  }
}
