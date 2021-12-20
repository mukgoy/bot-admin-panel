import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeforeLoginGuard, AuthGuard } from '@shared/guards';
import { JwtInterceptor, ErrorInterceptor } from '@shared/interceptors';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [BeforeLoginGuard],
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin-panel/admin-panel.module').then(m => m.AdminPanelModule),
    data : {topTab: 'consumer'}
  },
  {
    path: 'business',
    loadChildren: () => import('./user-panel/user-panel.module').then(m => m.UserPanelModule),
    data : {topTab: 'business'}
  },
  {
    path: '**',
    // redirectTo: '/auth/login'
    redirectTo: '/admin/chats'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true }
  ],
})
export class AppRoutingModule { }
