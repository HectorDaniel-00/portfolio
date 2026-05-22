import { Component, input } from '@angular/core';
import { SkillGroup } from '@shared/models/portfolio.models';

@Component({
  selector: 'grid-skills-componet',
  imports: [],
  templateUrl: './grid-skills-componet.html',
})
export class GridSkillsComponet {
  skillGroups = input.required<SkillGroup[]>();
}
