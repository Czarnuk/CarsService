import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared-module/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports:[SidebarComponent],
  declarations: [SidebarComponent]
})
export class CoreModule { }
