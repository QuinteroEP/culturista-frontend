import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/authService';
import { accountService } from 'src/app/service/accountService';
import { planService } from '../service/planService';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  constructor(private router: Router, private auth: AuthService, private accountService: accountService, private plan: planService) { }

  greeting: String  = '';
  logged: boolean = false;

  ngOnInit() {
    this.auth.logged$.subscribe(value => {
      this.logged = value;
      if (this.auth.email !== '') {
        this.accountService.findClientByEmail(this.auth.email).subscribe(
          (usuario) => {
            this.greeting = 'Hola ' + usuario.nombre;
            this.plan.name = usuario.nombre;
          }
        );
      }
      else{
        this.greeting = 'Hola John Doe';
      }
    });
  }

  goToHome() {
    this.router.navigate(['']);
  }

  goToRegistro() {
    this.router.navigate(['client/signup']);
  }
}
