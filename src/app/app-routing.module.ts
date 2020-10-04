import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateflightscheduleComponent } from './createflightschedule/createflightschedule.component';
import { CreatescheduleComponent } from './createschedule/createschedule.component';

const routes: Routes = [
  {
    path:"app-createschedule",
    component:CreatescheduleComponent
  },
  {
    path:"app-createflightschedule",
    component:CreateflightscheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
