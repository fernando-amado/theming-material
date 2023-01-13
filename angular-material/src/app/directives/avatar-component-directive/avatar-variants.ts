import { Directive, ElementRef, Input } from '@angular/core';
export type avatarVariant = 'around' | 'square'

@Directive({
  selector: `[avatar]`,
})

export class avatarVariantDirective {
    constructor(private el: ElementRef<HTMLElement>) {}
    @Input()
    avatar!: avatarVariant;

    ngOnInit(): any {
    this.el.nativeElement.classList.add(`matAvatar--${this.avatar}` );
    }
};