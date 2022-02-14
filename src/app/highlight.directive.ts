import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  previousRef: ElementRef;
  constructor(private elR: ElementRef) {}

  @HostListener('mouseover')
  changeColor(event) {
    this.elR.nativeElement.style.backgroundColor = 'red';
  }
  @HostListener('mouseout')
  changeColorBack(event) {
    this.elR.nativeElement.style.backgroundColor = 'white';
  }
}
