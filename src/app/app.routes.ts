import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {authGuard} from './auth.guard';

export const routes: Routes = [
  {path: 'home', loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)},
  {path: 'xchg', loadComponent: () => import('./xchg/xchg.component').then(c => c.XchgComponent)},
  {path: 'login', loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)},
  {path: 'register', loadComponent: () => import('./register/register.component').then(c => c.RegisterComponent)},
  {path: 'profile', canActivate: [authGuard], loadComponent: () => import('./profile/profile.component').then(c => c.ProfileComponent)},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
