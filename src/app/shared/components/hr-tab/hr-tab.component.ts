import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hr-tab',
  templateUrl: './hr-tab.component.html',
  styleUrls: ['./hr-tab.component.css']
})
export class HrTabComponent implements OnInit {

  @Input() tabName:string;
  @Input() hrList:string;
  constructor() {}

  ngOnInit() {
  }

}
