import { Component, input, output } from '@angular/core';
import { Project } from '@shared/models/portfolio.models';

@Component({
  selector: 'project-modal-component',
  imports: [],
  templateUrl: './project-modal-component.html',
})
export class ProjectModalComponent {
  project = input<Project | null>(null);
  close = output<void>();
}
