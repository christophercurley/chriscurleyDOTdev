import { Component } from '@angular/core';
import { faHandPointDown } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css',
})
export class IntroComponent {
  faHandPointDown = faHandPointDown;
}
