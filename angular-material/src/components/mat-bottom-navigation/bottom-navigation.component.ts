import { Component, Input, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  encapsulation:ViewEncapsulation.None
})
export class BottomNavigationComponent implements OnInit {
  constructor(private element: ElementRef<HTMLElement>) {}
  @Input() color: 'primary'|'accent'|'warn'|'success'|'info'|'warning' = 'primary';
  
  ngOnInit(){
    this.element.nativeElement.classList.add(`${this.element.nativeElement.tagName.toLocaleLowerCase()}--${this.color}`)
    console.log(this.element.nativeElement.classList)
  }
};

@Component({
  selector: 'bottom-navigation-actions',
  templateUrl: './bottom-navigation-actions.component.html',
})
export class bottomNavigationActionsComponents implements OnInit {
  constructor(private element: ElementRef<HTMLElement>) {}

  @Input() label?: string;
  @Input() icon?: string;
  
  ngOnInit() {}
  disabled() {
    document.querySelector('bottom-navigation-actions')?.classList.add('active')
    this.element.nativeElement.onclick = () => {
      document.querySelectorAll('bottom-navigation-actions').forEach((el) => {
        el.classList.remove('active');
      });
      this.element.nativeElement.classList.add('active');
    };
  }
  ngAfterViewInit() {
    this.disabled();
  }
}