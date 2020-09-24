import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [LayoutsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutsComponent
  ]
})
export class SharedModule { }
