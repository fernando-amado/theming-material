import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: `[matAvatar]`,
})

export class avatarDirective {
  constructor(private el: ElementRef<HTMLElement>) { 
    this.el.nativeElement.classList.add('avatar')
    }
}