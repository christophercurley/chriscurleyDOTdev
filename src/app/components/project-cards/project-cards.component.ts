import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrl: './project-cards.component.css',
})
export class ProjectCardsComponent {
  @ViewChild('card') card!: ElementRef;
  isDragged = false;
  lastX: number = 0;
  lastY: number = 0;

  constructor(private renderer: Renderer2) {}

  onMouseDown(event: MouseEvent): void {
    this.renderer.addClass(this.card.nativeElement, 'grabbing');
    this.isDragged = true;
    this.lastX = event.clientX;
    this.lastY = event.clientY;
    console.log(this.isDragged, this.lastX, this.lastY);
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.isDragged = false;
    if (this.card.nativeElement.classList.contains('grabbing')) {
      this.renderer.removeClass(this.card.nativeElement, 'grabbing');
    }
  }
}
