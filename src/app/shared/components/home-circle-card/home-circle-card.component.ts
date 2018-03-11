import { Component, OnInit, Input } from '@angular/core';
//mitti pao
@Component({
  selector: 'app-home-circle-card',
  templateUrl: './home-circle-card.component.html',
  styleUrls: ['./home-circle-card.component.css']
})
export class HomeCircleCardComponent implements OnInit {

  @Input() heading:string;
  @Input() text: string;
  @Input() picturePath:string;

  constructor() { }

  ngOnInit() {
  }

}
