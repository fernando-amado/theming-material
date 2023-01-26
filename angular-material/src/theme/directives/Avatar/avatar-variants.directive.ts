import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Size } from '../size-directive/size.directive';

export type avatarVariant = 'rounded' | 'square' | 'circular';

@Directive({
  selector: `mat-avatar,div [avatar]`,
})
export class avatarVariantDirective implements OnInit{
  constructor(private el: ElementRef<HTMLElement>) {}
  @Input()
  avatar: avatarVariant = 'circular';
  
  @Input()
  size: Size = 'small';

  ngOnInit(): void {
    this.el.nativeElement.classList.add(`matAvatar--${this.avatar}`, `matAvatar--${this.size}` );
  }
};