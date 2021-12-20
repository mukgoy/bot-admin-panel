import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { HeaderComponent } from './components/shared/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChatsComponent } from './components/chats/chats.component';
import { LayoutComponent } from './components/shared/layout/layout.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent,
    ChatsComponent,
    LayoutComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    SharedModule
  ]
})
export class AdminPanelModule { }
