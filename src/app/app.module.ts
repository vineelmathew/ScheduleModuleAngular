import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ScheduleService } from './service/scheduleservice';
import { CreatescheduleComponent } from './createschedule/createschedule.component';
import { CreateflightscheduleComponent } from './createflightschedule/createflightschedule.component';
import { FlightScheduleService } from './service/flightscheduleservice';

@NgModule({
  declarations: [
    AppComponent,
    CreatescheduleComponent,
    CreateflightscheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [HttpClient,ScheduleService,FlightScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
