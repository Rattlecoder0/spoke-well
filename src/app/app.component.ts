import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private router: Router, private renderer: Renderer2){}

  ngOnInit(): void {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     this.updateBodyColorBasedOnRoute();
    //   }
    // });
  }

  // updateBodyColorBasedOnRoute() {
  //   const currentRoute = this.router.url;
  //   let bodyColor = '';
  
  //   // Set body color based on current route
  //   switch (currentRoute) {
  //     case '/add-members':
  //       bodyColor = 'var(--white)'; 
  //       break;
  //     default:
  //       bodyColor = 'white';
  //   }
  
  //   this.renderer.setStyle(document.body, 'background-color', bodyColor);
  // }
}
