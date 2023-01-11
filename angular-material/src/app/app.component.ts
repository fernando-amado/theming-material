import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lotsOfTabs = new Array(25).fill(0).map((_, index) => `Tab ${index}`);

}
