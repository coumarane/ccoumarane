import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
<<<<<<< HEAD

  categories: any;
  selectedIndex: number = 0;

  constructor(private router: Router) { 
    this.categories = [
      {
      //"Profile", "Work experience", "Education"
        name: "Home",
        url: "/"
      },
      {
        name: "Profile",
        url: "/profile"
      },
      {
        name: "About",
        url: "/about"
      },
      {
        name: "Work experience",
        url: "/work-experience"
      },
      {
        name: "Education",
        url: "/education"
      },
      {
        name: "Technical skills",
        url: "/technical-skills"
      },
      {
        name: "Contact",
        url: "/contact"
      }
    ];
  }

  selectedIndexChange(event: any) : void {
    this.selectedIndex = event;
    //console.log([this.categories[event].url]);
    this.router.navigate([this.categories[this.selectedIndex].url]);
  }

=======
  title = 'app works!';

  categories: any;
  constructor() { 
    this.categories = ["Profile", "Work experience", "Education"];
  }
>>>>>>> 4774ede40661aeb8582063c19184276fffa185ae
}
