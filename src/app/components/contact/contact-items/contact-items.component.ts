import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-items',
  templateUrl: './contact-items.component.html',
  styleUrls: ['./contact-items.component.css']
})
export class ContactItemsComponent implements OnInit {

  @Input() title:string;
  @Input() details:string;
  @Input() iconCode:string;
  
  constructor() { }

  ngOnInit() {
  }

}
