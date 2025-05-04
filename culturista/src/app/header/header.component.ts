import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/authService';
import { accountService } from '../service/accountService';
import { planService } from '../service/planService';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  greeting: string = '';
  logged: boolean = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private accountService: accountService,
    private plan: planService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.auth.logged$.subscribe(value => {
      this.logged = value;
      if (this.auth.email) {
        this.accountService.findClientByEmail(this.auth.email).subscribe(user => {
          this.greeting = 'Hola ' + user.nombre;
          this.plan.name = user.nombre;
        });
      } else {
        this.greeting = 'Hola John Doe';
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const headerEl = this.el.nativeElement.querySelector('header');
    if (window.pageYOffset > 50) {
      this.renderer.addClass(headerEl, 'scrolled');
    } else {
      this.renderer.removeClass(headerEl, 'scrolled');
    }
  }

  goToHome() {
    this.router.navigate(['']);
  }

  goToRegistro() {
    this.router.navigate(['client/signup']);
  }
}
