import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@shared/components/navbar-component/navbar-component';
import { FooterComponent } from '@shared/components/footer-component/footer-component';
import { LoadingPageComponent } from '@shared/components/loading-page-component/loading-page-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, LoadingPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private router = inject(Router);

  isloading = signal(false);

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isloading.set(true);
      }

      if (event instanceof NavigationEnd) {
        this.isloading.set(false);
      }
    });
  }
}
