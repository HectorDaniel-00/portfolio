import { Component } from '@angular/core';
import { profile } from '@shared/data/portfolio.data';
import { AboutSectionComponent } from '@shared/components/about-section/about-section-component';

@Component({
  selector: 'home-page',
  imports: [AboutSectionComponent],
  templateUrl: './home-page.html',
})
export class HomePage {
  readonly profile = profile;
}
