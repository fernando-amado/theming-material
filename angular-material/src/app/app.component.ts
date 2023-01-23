import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})

export class AppComponent {
  lotsOfTabs = new Array(20).fill(0).map((_, index) => `Tab ${index}`);
  
}