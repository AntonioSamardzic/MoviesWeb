import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngagementRoutingModule } from './engagement-routing.module';
import { EngagementListComponent } from './engagement-list/engagement-list.component';
import { EngagementFormComponent } from './engagement-form/engagement-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [EngagementListComponent, EngagementFormComponent],
  imports: [
    CommonModule,
    EngagementRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ]
})
export class EngagementModule { }
