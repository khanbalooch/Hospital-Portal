import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-vertical-programs',
  templateUrl: './vertical-programs.component.html',
  styleUrls: ['./vertical-programs.component.css']
})
export class VerticalProgramsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function () {
      $('.itemPanel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        //autoplay: true,
        //autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1080,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 840,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          }
        ]

      });
    });


  }

}
