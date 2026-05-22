import { Component } from '@angular/core';
import { HomePage } from '@features/home-page/home-page';
import { SkillsPage } from '@features/skills-page/skills-page';
import { ProjectPage } from '@features/project-page/project-page';

@Component({
  selector: 'main-layout',
  imports: [HomePage, SkillsPage, ProjectPage],
  templateUrl: './main-layout.html',
})
export class MainLayout {}
