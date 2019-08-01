import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovietypeRoutingModule } from './movietype-routing.module';
import { MovietypeListComponent } from './movietype-list/movietype-list.component';


@NgModule({
  declarations: [MovietypeListComponent],
  imports: [
    CommonModule,
    MovietypeRoutingModule
  ]
})
export class MovietypeModule { }
