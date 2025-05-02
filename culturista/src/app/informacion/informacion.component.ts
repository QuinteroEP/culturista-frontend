import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { destino } from '../entity/destino';
import { destinoService } from 'src/app/service/destinoService';
import { Location } from '@angular/common';


@Component({
  selector: 'app-informacion',
  imports: [CommonModule],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionComponent {
  id!: number;
  destinoInfo!: destino;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private destinoService: destinoService,
    private location: Location) { }

  returnToForm(){
    this.location.back();
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log("id:" + this.id);

    this.destinoService.findById(this.id).subscribe(
      (destino) => {
        this.destinoInfo = destino;
      }
    );
  }
}
