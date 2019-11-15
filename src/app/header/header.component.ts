import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  menuBtn = false;
  menu = false;
  menuNav = false;
  menuBranding = false;
  navItem = false;

  closeMenu() {
    this.menuBtn = !this.menuBtn;
    this.menu = !this.menu;
    this.menuNav = !this.menuNav;
    this.menuBranding = !this.menuBranding;
    this.navItem = !this.navItem;
  }


}


