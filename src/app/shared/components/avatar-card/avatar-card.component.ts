import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar-card',
  templateUrl: './avatar-card.component.html',
  styleUrls: ['./avatar-card.component.css']
})
export class AvatarCardComponent implements OnInit {

  @Input() name: string;
  @Input() designation:string;
  @Input() qualification:string;
  @Input() imagePath:string;
  
  constructor() { 
    if(this.imagePath == ""){
      this.imagePath = "./assets/images/doctor.png";
    }
  }

  ngOnInit() {
  }

}
