import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whoami',
  templateUrl: './whoami.component.html',
  styleUrls: ['./whoami.component.css']
})
export class WhoamiComponent implements OnInit {
  

  ngOnInit() {
  }

  showAlert(): void {
    console.log("Test");
    alert("Test");
  }
}
