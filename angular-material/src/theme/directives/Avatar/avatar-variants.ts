import { Directive, ElementRef, Input } from '@angular/core';
import { Size } from '../size-directive/size.directive';

export type avatarVariant = 'rounded' | 'square' | 'circular';

@Directive({
  selector: `mat-avatar,avatar [avatar]`,
})
export class avatarVariantDirective {
  constructor(private el: ElementRef<HTMLElement>) {}
  @Input()
  avatar: avatarVariant = 'circular';
  
  @Input()
  size: Size = 'small';
  
  ngOnInit(): void {
    this.el.nativeElement.classList.add(`matAvatar--${this.avatar}`, `matAvatar--${this.size}` );
  }
};
