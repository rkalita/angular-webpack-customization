import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home2Component } from './components/home2/home2.component';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: Home2Component
  }
];

@NgModule({
  declarations: [Home2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Home2Module { }
