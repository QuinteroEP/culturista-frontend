import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from "./landing/landing.component";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingComponent,
    AppComponent,
    RouterModule,
    AppRoutingModule
],
  providers: [],
  bootstrap: []
})
export class AppModule { }
