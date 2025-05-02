import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { guia } from 'src/app/entity/guia';
import { guiaService } from 'src/app/service/guiaService';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear',
  imports: [FormsModule],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearGuiasComponent {
  constructor(
    private route: ActivatedRoute,
    private guiaService: guiaService,
    private location: Location) { }

    guiaNuevo!: guia;
    guia: any = {};

    @Output()
    agregarGuiaEvent = new EventEmitter<guia>();
    modo = this.route.snapshot.queryParamMap.get('modo');
    id: string | null = this.route.snapshot.queryParamMap.get('id');
    
    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        const modo = params['modo'];
        const id = params['id'];
    
        console.log('modo:', modo, 'id:', id);
    
        if (modo === 'editar' && id) {
          this.guiaService.findById(Number(id)).subscribe(
            guia => {
              console.log('Guia recibido:', guia);
              this.guia = guia;
            },
            error => {
              console.error('Error al cargar guia:', error);
            }
          );
        }
      });
    }

    createGuide(form: NgForm) {
      const nombre = form.value.nombre;
      const correo = form.value.correo;
      const telefono = form.value.telefono;

      console.log('Nombre:', nombre);
      console.log('Correo:', correo);
      console.log('Telefono:', telefono);

      this.guiaNuevo = {
        nombre: nombre,
        correo: correo,
        telefono: telefono,
        puntaje: 0,
        comentarios: [],
        id: this.id ? Number(this.id) : undefined
      }

      if (this.modo == 'agregar') {
        this.guiaService.addGuia(this.guiaNuevo).subscribe(
        (response) => {
          console.log('Guia agregado con éxito', response);
          this.agregarGuiaEvent.emit(this.guiaNuevo);
          this.location.back();
          },
          (error) => {
            console.error('Error al agregar el guia', error);
          }
        )
      }

      else if (this.modo == 'editar'){
        this.guiaService.updateGuia(this.guiaNuevo, this.guia.id).subscribe(
          (response) => {
            console.log('Guia modificado con éxito', response);
            this.agregarGuiaEvent.emit(this.guiaNuevo);
            this.location.back();
          },
          (error) => {
            console.error('Error al modificar el guia', error);
          }
        )
      }
      
    }
}
