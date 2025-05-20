import { tipoActividad } from "./tipoActividad";

export interface destino{
    id?: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    tipo: tipoActividad;
    ubicacion: string;
    fecha: string;
    precio: number;
    organizer_id: number;
    capacidad: number;
    recomendaciones: string[];
}