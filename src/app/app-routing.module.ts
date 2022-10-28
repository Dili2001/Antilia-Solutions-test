import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'registration-form', loadChildren: () => import('./registration-form/registration-form.module').then(m => m.RegistrationFormModule) },
  {path:'',redirectTo:'registration-form',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
