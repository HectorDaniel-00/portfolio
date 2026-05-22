import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { NavbarData } from './models/navbar.model';

@Component({
  selector: 'navbar-component',
  imports: [RouterLinkActive],
  templateUrl: './navbar-component.html',
})
export class NavbarComponent {
  readonly items: NavbarData[] = [
    {
      label: 'Inicio',
      url: '#home',
    },
    {
      label: 'Skills',
      url: '#skills',
    },
    {
      label: 'Projects',
      url: '#projects',
    },
    {
      label: 'Contacto',
      url: '#contact',
    },
  ];
}
