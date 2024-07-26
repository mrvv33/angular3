import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './members/members.component';
import { ReportsComponent } from './reports/reports.component';
import { AdminHomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AdminHomeComponent, MembersComponent, ReportsComponent, AdminLayoutComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    AdminHomeComponent,MembersComponent
  ]
})
export class AdminModule { }
