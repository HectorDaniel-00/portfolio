import { Component } from '@angular/core';
import { aboutForMe } from '@shared/data/portfolio.data';

@Component({
  selector: 'about-section',
  imports: [],
  templateUrl: './about-section-component.html',
})
export class AboutSectionComponent {
  protected readonly aboutForMe = aboutForMe;
}
