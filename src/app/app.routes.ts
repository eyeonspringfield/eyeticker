import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {path: 'home', loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)},
  {path: 'xchg', loadComponent: () => import('./xchg/xchg.component').then(c => c.XchgComponent)},
  {path: 'search', loadComponent: () => import('./search/search.component').then(c => c.SearchComponent)},
  {path: 'login', loadComponent: () => import('./login/login.component').then(c => c.LoginComponent)},
  {path: 'register', loadComponent: () => import('./register/register.component').then(c => c.RegisterComponent)},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
