import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovietypeRoutingModule } from './movietype-routing.module';
import { MovietypeListComponent } from './movietype-list/movietype-list.component';
import { MovietypeFormComponent } from './movietype-form/movietype-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [MovietypeListComponent, MovietypeFormComponent],
  imports: [
    CommonModule,
    MovietypeRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ]
})
export class MovietypeModule { }
