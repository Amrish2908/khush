import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class SidebarComponent  {

  title = 'ng-icon-sidebar';
  private isOpen = false;
  private isFocusIn = false;
  navData= navbarData;

  public get opened(): boolean {
    return this.isOpen;
  }
  public onMouseEnter(): void {
    this.isOpen = true;
  }

  public onMouseLeave(): void {
    if (!this.isFocusIn) {
      this.isOpen = false;
    }
  }
}