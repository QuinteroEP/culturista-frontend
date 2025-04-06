import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/authService';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  constructor(private router: Router, private auth: AuthService) { }

  logged: boolean = false;

  ngOnInit() {
    this.auth.logged$.subscribe(value => {
      this.logged = value;
    });
  }

  goToHome() {
    console.log('showForm');
    this.router.navigate(['']);
  }

  goToRegistro() {
    console.log('showForm');
    this.router.navigate(['signup']);
  }
}
