import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyFormComponent } from './company-form/company-form.component';


const routes: Routes = [
  {path: 'companies', component: CompanyListComponent},
  { path: 'companies/new', component: CompanyFormComponent },
  { path: 'companies/:id', component: CompanyFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
