import { Component } from '@angular/core';
import { skillGroups } from '@shared/data/portfolio.data';

@Component({
  selector: 'skills-page',
  imports: [],
  templateUrl: './skills-page.html',
})
export class SkillsPage {
  protected readonly skillGroups = skillGroups;
}
