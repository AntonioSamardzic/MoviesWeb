import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EngagementListComponent } from './engagement-list/engagement-list.component';
import { EngagementFormComponent } from './engagement-form/engagement-form.component';


const routes: Routes = [
  { path: 'engagements', component: EngagementListComponent },
  { path: 'engagements/new', component: EngagementFormComponent },
  { path: 'engagements/:id', component: EngagementFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EngagementRoutingModule { }
