import { Injectable } from '@angular/core';
import { guia } from '../entity/guia';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class planService {

  constructor(
    private http: HttpClient) { }

    listIds: Array<number> = [];
    listGuides: Array<number> = [];

    saveToDestinies(id: number) {
        this.listIds.push(id);
        console.log("Lista de IDs: " + this.listIds);
    }

    saveToGuides(id: number) {
      this.listGuides.push(id);
      console.log("Lista de Guias: " + this.listGuides);
    }

    loadDestiniesIds(): Array<number> {
      return this.listIds;
    }

    loadGuidesIds(): Array<number> {
      return this.listGuides;
    }
}