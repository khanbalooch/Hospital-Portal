import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
/*
customization by _tyb
 */

 /*******************************************************************
    window.onscroll = function() {scrollFunc()};
    var header = document.getElementById("navigation-container");
    var sticky = header.offsetTop;
    
    function scrollFunc() {

      if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
     
    }
***************************************************/
  }

}
