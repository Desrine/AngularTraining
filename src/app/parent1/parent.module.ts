import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1/child1.component';
import { C1child2Component } from './c1child2/c1child2.component';
import { Parent2Module } from '../parent2/parent2.module';

@NgModule({
  imports: [CommonModule, Parent2Module],
  declarations: [Child1Component, C1child2Component],
  exports: [Child1Component],
})
export class ParentModule {}
