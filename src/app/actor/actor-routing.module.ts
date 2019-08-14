import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorFormComponent } from './actor-form/actor-form.component';



const routes: Routes = [
  { path: 'actors', component: ActorListComponent },
  { path: 'actors/new', component: ActorFormComponent },
  { path: 'actors/:id', component: ActorFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorRoutingModule { }
