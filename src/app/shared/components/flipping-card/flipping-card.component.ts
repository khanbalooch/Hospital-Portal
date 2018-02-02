import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flipping-card',
  templateUrl: './flipping-card.component.html',
  styleUrls: ['./flipping-card.component.css']
})
export class FlippingCardComponent implements OnInit {

  @Input() imagePath:string;
  @Input() heading:string;
  @Input() text: string;
  
  constructor() { }

  ngOnInit() {
  }

}
