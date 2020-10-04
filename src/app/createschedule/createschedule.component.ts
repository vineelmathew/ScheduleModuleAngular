import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from '../model/schedule';
import { ScheduleService } from '../service/scheduleservice';
@Component({
  selector: 'app-createschedule',
  templateUrl: './createschedule.component.html',
  styleUrls: ['./createschedule.component.css']
})

export class CreatescheduleComponent implements OnInit {
  schedule:Schedule;
  constructor(private scheduleservice:ScheduleService) { 
  }
  ngOnInit():void{}

  saveSchedule(form)
  {
    let details=form.value;
    let fromAirport=details.sourceAirport;
  let toAirport=details.destinationAirport;
  let airportCode=details.airportCode;
  let arrivalTime=details.arrival;
  let at=new Date(arrivalTime);
  let departureTime=details.departureTime;
  let dt=new Date(departureTime);
  console.log(at,dt);
  console.log(airportCode);
  this.schedule=new Schedule(fromAirport,toAirport,at,dt,airportCode);
  let result:Observable<Schedule>=this.scheduleservice.addSchedule(this.schedule);
  result.subscribe(
           response=>{
             console.log(response.getAirportCode,response.getArrivalTime,response.getDepartureTime,
                                 response.getFromAirport,response.getToAirport);
           }
  );

          }
        }
