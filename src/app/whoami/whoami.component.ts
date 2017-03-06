import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2/index';

@Component({
  selector: 'app-whoami',
  templateUrl: './whoami.component.html',
  styleUrls: ['./whoami.component.css']
})
export class WhoamiComponent implements OnInit {

  categories: FirebaseListObservable<any>;

  constructor(private af: AngularFire) { 
    this.categories = af.database.list('Categories');
    this.categories.subscribe(
      val => console.log(val)
    );
  }

  ngOnInit() {
  }

}
