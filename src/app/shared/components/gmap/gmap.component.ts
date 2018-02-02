import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.css']
})
export class GmapComponent implements OnInit {

  lat: number = 29.6171294;
  lng: number = 71.9132533;


  constructor() { }

  ngOnInit() {
  }

}
