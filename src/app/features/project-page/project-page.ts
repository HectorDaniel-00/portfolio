import { Component, signal } from '@angular/core';
import { projects } from '@shared/data/portfolio.data';
import { Project } from '@shared/models/portfolio.models';
import { ProjectCardComponent } from '@shared/components/project-card-component/project-card-component';
import { ProjectModalComponent } from '@shared/components/project-modal-component/project-modal-component';

@Component({
  selector: 'project-page',
  imports: [ProjectCardComponent, ProjectModalComponent],
  templateUrl: './project-page.html',
})
export class ProjectPage {
  protected readonly projects = projects;

  selectedProject = signal<Project | null>(null);

  openProject(project: Project) {
    this.selectedProject.set(project);
  }

  closeProject() {
    this.selectedProject.set(null);
  }
}
