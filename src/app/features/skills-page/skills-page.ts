import { Component } from '@angular/core';
import { skillGroups } from '@shared/data/portfolio.data';
import { GridSkillsComponet } from '@shared/components/grid-skills-componet/grid-skills-componet';

@Component({
  selector: 'skills-page',
  imports: [GridSkillsComponet],
  templateUrl: './skills-page.html',
})
export class SkillsPage {
  protected readonly skillGroups = skillGroups;
}
