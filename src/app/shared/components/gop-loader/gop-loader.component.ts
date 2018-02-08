import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gop-loader',
  templateUrl: './gop-loader.component.html',
  styleUrls: ['./gop-loader.component.css']
})
export class GopLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    function load() {
      //console.log("load event detected!");
      document.getElementById("gop-container").style.display = "none";
    }
    window.onload = load;

  }

}
