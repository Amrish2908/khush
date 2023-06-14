import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/core/header/header.component';
import { SidebarComponent } from './components/core/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarMenuComponent } from './components/core/sidebar-menu/sidebar-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    SidebarMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
