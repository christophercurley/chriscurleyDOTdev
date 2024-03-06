import { Component } from '@angular/core';
import { Project } from '../../types/project';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrl: './project-cards.component.css',
})
export class ProjectCardsComponent {
  projects: Project[] = [
    {
      name: 'ngFlix',
      url: 'https://ngflix.chriscurley.dev',
      screenshotPath: '',
      logoPath: '',
      description:
        "Browse and discover movies and TV shows! Built with Angular 17 and plugged into TMDB's database.",
    },
  ];
}
