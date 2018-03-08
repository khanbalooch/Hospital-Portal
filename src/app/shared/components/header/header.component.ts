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

 /*******************************************************************/
    window.onscroll = function() {scrollFunc()};
    var header = document.getElementById("header-scroll");
    var logoImgLt = document.getElementById("logoLt");
    var logoImgRt = document.getElementById("logoRt");
    var sticky = header.offsetTop;
    
    
    function scrollFunc() {
      console.log(window.pageYOffset);
      if (window.pageYOffset != sticky) {
        header.classList.add("sticky");
        logoImgLt.classList.add("minWidth");
        logoImgRt.classList.add("minWidth");

      } else {
        header.classList.remove("sticky");
        logoImgLt.classList.remove("minWidth");
        logoImgRt.classList.remove("minWidth");
      }
     
    }
/***************************************************/
  }

}
