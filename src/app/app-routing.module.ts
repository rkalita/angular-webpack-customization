import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';

export const appRoutes: Routes = [
  /* th:start */
  {
    path: 'home',
    loadChildren: () =>
      import('./home1/home1.module').then(m => m.Home1Module),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home2/home2.module').then(m => m.Home2Module),
  },
  /* th:end */
  /* ho:start */
  {
    path: 'home',
    component: AppComponent
  }
  /* ho:end */
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
