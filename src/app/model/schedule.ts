export class Schedule
{
    private fromAirport:string;
    private toAirport:string;
    arrivalTime;
    departureTime;
    private airportCode:string;

    constructor(fromAirport:string,toAirport:string,arrivalTime,departureTime,airportCode:string)
    {
            this.airportCode=airportCode;
            this.arrivalTime=arrivalTime;
            this.departureTime=departureTime;
            this.fromAirport=fromAirport;
            this.toAirport=toAirport;
    }
    getAirportCode():string{
        return this.airportCode;
    }
    getDepartureTime(){
        return this.departureTime
    }
    getArrivalTime()
    {
        return this.arrivalTime;
    }
    getFromAirport():string{
        return this.fromAirport;
    }
    getToAirport():string{
        return this.toAirport;
    }
    

}