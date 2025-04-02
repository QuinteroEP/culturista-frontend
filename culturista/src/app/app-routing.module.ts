import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { PlanComponent } from './plan/plan.component';
import { GuiasComponent } from './guias/guias.component';
import { InformacionComponent } from './informacion/informacion.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'formulario/resultados', component: ResultadosComponent },
  { path: 'formulario/guias', component: GuiasComponent },
  { path: 'destinos/info/:id', component: InformacionComponent},
  { path : 'plan', component: PlanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
