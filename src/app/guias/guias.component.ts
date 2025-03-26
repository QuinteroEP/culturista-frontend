import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guias',
  imports: [],
  templateUrl: './guias.component.html',
  styleUrl: './guias.component.css'
})
export class GuiasComponent {

  constructor(private router: Router) { }

  email1 = 'jitter@kim.com';
  email2 = 'andres@puj.co';
  goToPlan(){
    this.router.navigate(['plan']);
  }
}
