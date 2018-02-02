import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {


  @Input() messageFrom : string ;
  @Input() name:string;
  @Input() picturePath : string ;
  @Input() message : string;
  constructor() { }

  ngOnInit() {
  }

}
