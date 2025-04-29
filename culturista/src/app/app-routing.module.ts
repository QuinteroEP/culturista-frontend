import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { PlanComponent } from './plan/plan.component';
import { GuiasComponent } from './guias/guias.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ClientLoginComponent } from './login/client/clientLogin.component';
import { ClientComponentSignup } from './registro/client/clientSignup.component';
import { ServiciosComponent } from './info/servicios/servicios.component';
import { OrganizadoresComponent } from './info/organizadores/organizadores.component';
import { ContactoComponent } from './info/contacto/contacto.component';
import { OrganizerLoginComponent } from './login/organizer/organizerLogin.component';
import { OrganizerSignupComponent } from './registro/organizer/organizerSignup.component';
import { DashboardComponent } from './organizadores/dashboard/dashboard.component';
import { InformacionGuiasComponent } from './guias/informacion/informacion.component';


export const routes: Routes = [
  { path: '', component: LandingComponent },

  { path: 'formulario', component: FormularioComponent },
  { path: 'formulario/resultados', component: ResultadosComponent },
  { path: 'formulario/guias', component: GuiasComponent },

  { path: 'destinos/info/:id', component: InformacionComponent},

  { path: 'plan', component: PlanComponent},

  { path: 'info/servicios', component: ServiciosComponent },
  { path: 'info/organizadores', component: OrganizadoresComponent },
  { path: 'info/contacto', component: ContactoComponent },

  { path: 'client/login', component: ClientLoginComponent },
  { path: 'client/signup', component: ClientComponentSignup },

  { path: 'organizer/login', component: OrganizerLoginComponent },
  { path: 'organizer/signup', component: OrganizerSignupComponent },
  { path: 'organizer/dashboard', component: DashboardComponent },

  { path: 'guias/informacion/:id', component: InformacionGuiasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
