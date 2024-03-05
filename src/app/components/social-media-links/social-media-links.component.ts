import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { URLS, EMAIL_ADDRESS } from '../../constants';

@Component({
  selector: 'app-social-media-links',
  templateUrl: './social-media-links.component.html',
  styleUrl: './social-media-links.component.css',
})
export class SocialMediaLinksComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  urls = URLS;
  email = EMAIL_ADDRESS;
}
