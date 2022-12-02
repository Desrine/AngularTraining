import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child2Component } from './child2/child2.component';
import { ParentModule } from '../parent1/parent.module';

@NgModule({
  imports: [CommonModule],
  declarations: [Child2Component],
})
export class Parent2Module {}
