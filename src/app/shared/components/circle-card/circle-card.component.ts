import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle-card',
  templateUrl: './circle-card.component.html',
  styleUrls: ['./circle-card.component.css']
})
export class CircleCardComponent implements OnInit {

  @Input() heading:string;
  @Input() text: string;
  @Input() picturePath:string;
  
  constructor() { }

  ngOnInit() {
  }

}
