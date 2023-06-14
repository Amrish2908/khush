import { Injectable, OnInit } from '@angular/core';
// import { navbarData } from './nav-data';

@Injectable({
  providedIn: 'root'
})
export class SidebarService implements OnInit {
  data: any;
  navbar_data = [
    {
      name: 'amrish'
    }
  ]
  navData = [
    {
      routeLink: 'dashboard',
      icon: 'bi bi-house-door',
      label: 'DAshboard'
    },
    {
      routeLink: 'dashboard',
      icon: 'bi bi-house-door',
      label: 'DAshboard'
    }
  ];
  ngOnChanges(): void {
    this.data = this.navbar_data
  }

}
