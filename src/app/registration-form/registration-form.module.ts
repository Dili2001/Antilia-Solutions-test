import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationFormRoutingModule } from './registration-form-routing.module';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterPageComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RegistrationFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegistrationFormModule { }
