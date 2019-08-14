import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyListComponent } from './company-list/company-list.component';

import { FormsModule } from '@angular/forms';
import { CompanyFormComponent } from './company-form/company-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [CompanyListComponent, CompanyFormComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ]
})
export class CompanyModule { }
