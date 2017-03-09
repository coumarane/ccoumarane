import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

//declare var jQuery: any; // JQuery Declaration

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    //console.log($);
    $(document).ready(function(){
      $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({
          width:$(this).attr('data-percent')
        }, 6000);
      });
    });
    
  }

  ngOnInit() {
  }

  onJQueryAlert() {
    //$("#dialog").dialog();
  }
}
