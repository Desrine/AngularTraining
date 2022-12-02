import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ParentModule } from './parent1/parent.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ParentModule],
  declarations: [AppComponent, TestComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
