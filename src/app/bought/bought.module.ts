import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoughtRoutingModule } from './bought-routing.module';
import { BoughtListComponent } from './bought-list/bought-list.component';
import { BoughtFormComponent } from './bought-form/bought-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [BoughtListComponent, BoughtFormComponent],
  imports: [
    CommonModule,
    BoughtRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ]
})
export class BoughtModule { }
