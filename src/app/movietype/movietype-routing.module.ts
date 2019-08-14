import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovietypeListComponent } from './movietype-list/movietype-list.component';
import { MovietypeFormComponent } from './movietype-form/movietype-form.component';


const routes: Routes = [
  { path: 'movietypes', component: MovietypeListComponent },
  { path: 'movietypes/new', component: MovietypeFormComponent },
  { path: 'movietypes/:id', component: MovietypeFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovietypeRoutingModule { }
