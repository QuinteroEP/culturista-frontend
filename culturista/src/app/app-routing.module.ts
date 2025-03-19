import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ResultadosComponent } from './resultados/resultados.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'formulario/resultados', component: ResultadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
