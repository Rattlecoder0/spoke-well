import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  menuOpenCloseState: boolean = false;

  constructor(){}

  ngOnInit(): void {
    
  }

  openMenu() {
    this.menuOpenCloseState = true;
    const menuElement = document.getElementById('targetMenuList');
    const masterCont = document.getElementById('master-container');
    if (menuElement && masterCont) {
      menuElement.style.height = menuElement.scrollHeight + 'px'; // Set to the scroll height
      setTimeout(() => {
        menuElement.style.height = 'auto'; // Set to auto after animation
      }, 300); // Match the duration of the transition
      masterCont.style.paddingBottom = '10px';
    }
  }
  
  closeMenu() {
    this.menuOpenCloseState = false;
    const menuElement = document.getElementById('targetMenuList');
    const masterCont = document.getElementById('master-container');
    if (menuElement && masterCont) {
      menuElement.style.height = menuElement.scrollHeight + 'px'; // Reset to current height
      setTimeout(() => {
        menuElement.style.height = '0'; // Then animate to height 0
      }, 10) // A slight delay to apply the initial height
      masterCont.style.paddingBottom = '0';
    }
  }
  
}
