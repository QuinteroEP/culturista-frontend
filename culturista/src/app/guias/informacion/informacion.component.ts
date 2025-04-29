import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { guia } from '../../entity/guia';
import { guiaService } from 'src/app/service/guiaService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-informacion',
  imports: [CommonModule],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionGuiasComponent {
    id!: number;
    guiaInfo!: guia;

    constructor(
      private route: ActivatedRoute, 
      private router: Router,
      private guiaService: guiaService) { }

    ngOnInit() {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      console.log("id:" + this.id);
  
      this.guiaService.findById(this.id).subscribe(
        (guia) => {
          this.guiaInfo = guia;
          console.log("guiaInfo:" + this.guiaInfo);
        }
      );
  }
}
