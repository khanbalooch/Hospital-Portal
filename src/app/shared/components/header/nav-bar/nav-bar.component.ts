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
    /*================
    Sticky Header
    ===================*/
    /* 
    window.onscroll = function() {myFunc()};
    var header = document.getElementById("navigation-container");
    var innerNav = document.getElementById("inner-nav");
    var sticky = header.offsetTop;

    function myFunc() {

      if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
        innerNav.classList.add("sticky-inside");
      } else {
        header.classList.remove("sticky");
        innerNav.classList.remove("sticky-inside");
      }
    
    }   
    */
/*=============================
    Add/Remove Active Class
===============================*/

var NavBar = document.getElementById("myNavbar");
//var navLinks = NavBar.getElementsByTagName("a");
var btns = NavBar.getElementsByClassName("navBtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
/******************************************************** */




 
  }
}
