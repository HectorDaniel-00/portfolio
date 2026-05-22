import { Component } from '@angular/core';
import { socialLinks } from '@shared/data/portfolio.data';

@Component({
  selector: 'contact-page',
  imports: [],
  templateUrl: './contact-page.html',
})
export class ContactPage {
  protected readonly socialLinks = socialLinks;
}
