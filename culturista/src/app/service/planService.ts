import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class planService {

  constructor(
    private http: HttpClient) { }

    listIds: Array<number> = [];
    listGuides: Array<number> = [];

    public name!: string;
    public dateS!: string;
    public dateE!: string;
    public destiny!: string;

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