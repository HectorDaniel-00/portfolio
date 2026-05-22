import { Component } from '@angular/core';
import { HomePage } from '@features/home-page/home-page';
import { SkillsPage } from '@features/skills-page/skills-page';

@Component({
  selector: 'main-layout',
  imports: [HomePage, SkillsPage],
  templateUrl: './main-layout.html',
})
export class MainLayout {}
