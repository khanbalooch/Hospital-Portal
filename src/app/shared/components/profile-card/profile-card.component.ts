import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  @Input() name: string;
  @Input() designation:string;
  @Input() qualification: string;
  @Input() picturePath:string;
  constructor() { }

  ngOnInit() {
  }

}
