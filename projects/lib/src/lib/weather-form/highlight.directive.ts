import { Directive, ElementRef } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private element: ElementRef) {
    let elementStyle = this.element.nativeElement.style;
    elementStyle.backgroundColor = '#5f5aee';
    elementStyle.color = 'black';
    elementStyle.padding = '0.5rem';
  }
}
