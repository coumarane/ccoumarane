import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  categories: any;
  constructor() { 
    this.categories = ["Profile", "Work experience", "Education"];
  }
}
