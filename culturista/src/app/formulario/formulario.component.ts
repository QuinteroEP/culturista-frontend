import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  constructor(private router: Router) { }
  
  showResults(form: NgForm) {
    console.log('Form Data:', form.value);
    
    const destino = form.value.destinos;
    const retorno = form.value.retorno;
    const salida = form.value.salida;
    const viajeros = form.value.viajeros;
    const presupuesto = form.value.presupuesto;
    const actividades = Object.keys(form.value).filter(key => form.value[key] === true); // Extract selected checkboxes

    const fecha = form.value.salida;

    console.log('Destino:', destino);
    console.log('Fecha de Salida:', salida);
    console.log('Fecha de Retorno:', retorno);
    console.log('Cantidad de Viajeros:', viajeros);
    console.log('Presupuesto:', presupuesto);
    console.log('Actividades:', actividades);

    const queryParams = {
      actividades: actividades.join(','), // Convert array to string
      destino: destino,
      inicio: salida,
      fin: retorno,
      presupuesto: presupuesto,
      viajeros: viajeros,
    };
    
    sessionStorage.clear();
    this.router.navigate(['formulario/resultados'], { queryParams });
  }  
}
