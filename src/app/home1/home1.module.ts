import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home1Component } from './components/home1/home1.component';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: Home1Component
  }
];

@NgModule({
  declarations: [Home1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Home1Module { }
