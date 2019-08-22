import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginListComponent } from './login-list/login-list.component';
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
  declarations: [LoginListComponent, LoginFormComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
