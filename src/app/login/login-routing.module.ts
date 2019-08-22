import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginListComponent } from './login-list/login-list.component';


const routes: Routes = [
  {path: 'login', component: LoginListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
