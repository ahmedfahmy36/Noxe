import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

constructor(){ }


ngOnInit(): void {
  
}
imgPrefix: string ='https://image.tmdb.org/t/p/w500';
@Input() headerTrendingMovie:any[] = [];

customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
  
    600: {
      items: 3
    },
    960: {
      items: 5
    },
    1200: {
      items: 6
    },
    1300: {
      items: 10
    }
  },
  nav: true
}


}
