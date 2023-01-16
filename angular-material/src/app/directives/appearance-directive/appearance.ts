import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: `[defaultAppearance]`,
})

export class appearanceDirective {
  constructor(private el: ElementRef<HTMLElement>) { 
    this.el.nativeElement.classList.add('default-textfield')
    }
}