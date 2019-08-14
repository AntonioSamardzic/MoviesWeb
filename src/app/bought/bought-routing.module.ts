import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoughtListComponent } from './bought-list/bought-list.component';
import { BoughtFormComponent } from './bought-form/bought-form.component';



const routes: Routes = [
  { path: 'boughts', component: BoughtListComponent },
  { path: 'boughts/new', component: BoughtFormComponent },
  { path: 'boughts/:id', component: BoughtFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoughtRoutingModule { }
