import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightSchedule } from '../model/flightschedule';
import { FlightScheduleService } from '../service/flightscheduleservice';

@Component({
  selector: 'app-createflightschedule',
  templateUrl: './createflightschedule.component.html',
  styleUrls: ['./createflightschedule.component.css']
})
export class CreateflightscheduleComponent implements OnInit {

  flightschedule:FlightSchedule;
  constructor(private flightservice:FlightScheduleService) { }

  ngOnInit(): void {
  
  }
  saveFlightSchedule(form)
  {
    let details=form.value;
    // let availableSeats=details.seats;
    // let scheduleId=details.id;
    // let flightNum=details.flightnumber;
    this.flightschedule=new FlightSchedule(1,1,1);
    let observable:Observable<FlightSchedule>=this.flightservice.addFlightSchedule(this.flightschedule);
    observable.subscribe(
      success=>
      {
      console.log("flight schedule added");
      });
  }

}
