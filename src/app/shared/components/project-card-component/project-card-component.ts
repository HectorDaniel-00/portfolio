import { Component, input, output } from '@angular/core';
import { Project } from '@shared/models/portfolio.models';

@Component({
  selector: 'project-card-component',
  imports: [],
  templateUrl: './project-card-component.html',
})
export class ProjectCardComponent {
  project = input.required<Project>();
  viewDetails = output<Project>();

  onViewDetails() {
    this.viewDetails.emit(this.project());
  }
}
