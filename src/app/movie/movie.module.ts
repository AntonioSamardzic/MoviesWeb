import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MovieListComponent, MovieFormComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    FormsModule
  ]
})
export class MovieModule { }


