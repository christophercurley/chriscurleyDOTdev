import { Component, Input } from '@angular/core';
import { Project } from '../../types/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() project: Project | null = null;
}
