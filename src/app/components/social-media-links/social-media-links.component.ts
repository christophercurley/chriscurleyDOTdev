import { Component } from '@angular/core';
import {
  IconDefinition,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { URLS } from '../../constants';

@Component({
  selector: 'app-social-media-links',
  templateUrl: './social-media-links.component.html',
  styleUrl: './social-media-links.component.css',
})
export class SocialMediaLinksComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  urls = URLS;
}
