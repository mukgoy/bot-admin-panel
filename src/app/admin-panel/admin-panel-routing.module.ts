import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@shared/guards';
import { ChatsComponent } from './components/chats/chats.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/shared/layout/layout.component';

const routesChild: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuard],
    data : {accessKey: 'dashboard'}
  },
  {
    path: 'chats',
    component: ChatsComponent,
    // canActivate: [AuthGuard],
    data : {accessKey: 'customers'}
  }
]

const routes: Routes = [
  {
      path: '',
      component: LayoutComponent,
      children: routesChild
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
