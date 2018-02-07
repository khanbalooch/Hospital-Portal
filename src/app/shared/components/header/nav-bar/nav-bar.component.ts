import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    /*
    customization by _tyb
    */
    window.onscroll = function() {myFunc()};
    var header = document.getElementById("navigation-container");
    var innerNav = document.getElementById("inner-nav");
    var sticky = header.offsetTop;

    function myFunc() {

      if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
        innerNav.classList.add("sticky-inside");
       console.log("eeeeee");
      } else {
        header.classList.remove("sticky");
        innerNav.classList.remove("sticky-inside");
        console.log("ooooo");
      }
    
    }   

 
  }
}
