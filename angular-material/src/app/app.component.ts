import { Component } from '@angular/core';
import { Size } from './Directivas/size/size.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sizeFirstButton: Size = 'small';
  sizeSecondButton: Size = 'medium';
}
