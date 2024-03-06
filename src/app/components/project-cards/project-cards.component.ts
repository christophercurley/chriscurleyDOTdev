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
      screenshotPath: '../../../assets/screenshots/ngflix.png',
      logoPath: '../../../assets/logos/ngflixLogo.png',
      description:
        "Browse and discover movies and TV shows! Built with Angular 17 and plugged into TMDB's API.",
    },
    {
      name: 'Calculator',
      url: 'calculator',
      screenshotPath: '',
      logoPath: '',
      description:
        'A clone of the iOS calculator, created with only Vanilla JS and HTML/CSS.',
    },
    {
      name: 'www.chriscurley.dev',
      url: '/',
      screenshotPath: '../../../assets/screenshots/chriscurleyDOTdev.png',
      logoPath: '',
      description:
        'Look familiar?! Just a place for me to showcase some projects and link my socials :)',
    },
  ];
}
