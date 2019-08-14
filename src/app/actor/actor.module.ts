import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorRoutingModule } from './actor-routing.module';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorFormComponent } from './actor-form/actor-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [ActorListComponent, ActorFormComponent],
  imports: [
    CommonModule,
    ActorRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ]
})
export class ActorModule { }
