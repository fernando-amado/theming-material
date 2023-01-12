import { Component, ElementRef, Input, OnInit } from '@angular/core';

export type Variant = 'text' | 'outlined' | 'contained';

@Component({
  selector: 'button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['../..//styles/main.scss']
})

export class ButtonGroupComponent implements OnInit {
  constructor(private el: ElementRef<HTMLHtmlElement>) {}
  @Input() 
  color?: 'primary'|'accent'|'warn'|'success'|'info'|'warning' = 'primary';
  
  @Input() 
  variant!: Variant;

  ngOnInit(): void {
    this.el.nativeElement.classList.add(
      `${this.color}-buttonGroup` || ' ',
      `${this.variant}-buttonGroup`
    );
  }
}
