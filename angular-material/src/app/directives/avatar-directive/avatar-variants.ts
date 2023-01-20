import { Directive, ElementRef, Input } from '@angular/core';
export type avatarVariant = 'rounded' | 'square' |'circular'

@Directive({
  selector: `[avatar]`,
})

export class avatarVariantDirective {
    constructor(private el: ElementRef<HTMLElement>) {}
    @Input()
    avatar!: avatarVariant;

    ngOnInit(): void {
    this.el.nativeElement.classList.add(`matAvatar--${this.avatar}` );
    }
};