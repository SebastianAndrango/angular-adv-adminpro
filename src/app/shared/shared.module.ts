import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    BreadCrumbsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidebarComponent,
    HeaderComponent,
    BreadCrumbsComponent
  ]
})
export class SharedModule { }
