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

  constructor(private renderer: Renderer2) {}

  onMouseDown(event: MouseEvent): void {
    this.renderer.addClass(this.card.nativeElement, 'grabbing');
    this.isDragged = true;
    this.lastX = event.clientX;
    console.log(this.isDragged, this.lastX);
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.isDragged = false;
    if (this.card.nativeElement.classList.contains('grabbing')) {
      this.renderer.removeClass(this.card.nativeElement, 'grabbing');
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDragged) return;

    // calculate distance moved
    const dx = event.clientX - this.lastX;
    this.lastX = event.clientX;

    const style = window.getComputedStyle(this.card.nativeElement);
    const matrix = new WebKitCSSMatrix(style.transform);
    const newX = matrix.m41 + dx;

    this.renderer.setStyle(
      this.card.nativeElement,
      'transform',
      `translateX(${newX}px)`
    );
  }
}
