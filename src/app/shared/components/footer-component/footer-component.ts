import { Component } from '@angular/core';
import { socialLinks } from '@shared/data/portfolio.data';

@Component({
  selector: 'footer-component',
  imports: [],
  templateUrl: './footer-component.html',
})
export class FooterComponent {
  readonly redes = socialLinks;
  currentYear = new Date().getFullYear();
}
