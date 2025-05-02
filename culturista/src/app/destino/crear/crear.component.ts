import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { destino } from 'src/app/entity/destino';
import { destinoService } from 'src/app/service/destinoService';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear',
  imports: [FormsModule],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
  })

export class CrearComponent {
  constructor(
    private route: ActivatedRoute,
    private destinoService: destinoService,
    private location: Location) { }

    destinoNuevo!: destino;
    destino: any = {};

    @Output()
    agregarDestinoEvent = new EventEmitter<destino>();
    modo = this.route.snapshot.queryParamMap.get('modo');
    id: string | null = this.route.snapshot.queryParamMap.get('id');
    
    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        const modo = params['modo'];
        const id = params['id'];
    
        console.log('modo:', modo, 'id:', id);
    
        if (modo === 'editar' && id) {
          this.destinoService.findById(Number(id)).subscribe(
            destino => {
              console.log('destino recibido:', destino);
              this.destino = destino;
            },
            error => {
              console.error('Error al cargar destino:', error);
            }
          );
        }
      });
    }

    createDestiny(form: NgForm) {
      const nombre = form.value.nombre;
      const descripcion = form.value.descripcion;
      const ubicacion = form.value.ubicacion;
      const fecha = form.value.fecha;
      const capacidad = form.value.capacidad;
      const costo = form.value.costo;
      const tipo = form.value.tipo;

      console.log('Nombre:', nombre);
      console.log('Fecha:', fecha);
      console.log('Capacidad:', capacidad);
      console.log('Costo:', costo);
      console.log('Ubicacion:', ubicacion);
      console.log('Tipo:', tipo);
      console.log('Descripcion:', descripcion);

      this.destinoNuevo = {
        nombre: nombre,
        fecha: fecha,
        capacidad: capacidad,
        precio: costo,
        ubicacion: ubicacion,
        tipo: tipo,
        descripcion: descripcion,
        organizer_id: 1,
        imagen: 'https://www.google.com	'
      }

      if (this.modo == 'agregar') {
        this.destinoService.addDestino(this.destinoNuevo, 1).subscribe(
        (response) => {
          console.log('Destino agregado con éxito', response);
          this.agregarDestinoEvent.emit(this.destinoNuevo);
          this.location.back();
          },
          (error) => {
            console.error('Error al agregar el destino', error);
          }
        )
      }

      else if (this.modo == 'editar'){
        this.destinoService.updateDestino(this.destinoNuevo, this.destino.id).subscribe(
          (response) => {
            console.log('Destino modificado con éxito', response);
            this.agregarDestinoEvent.emit(this.destinoNuevo);
            this.location.back();
          },
          (error) => {
            console.error('Error al modificar el destino', error);
          }
        )
      }
      
    }
}
