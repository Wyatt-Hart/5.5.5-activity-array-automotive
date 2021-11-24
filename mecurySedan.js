//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle{
    constructor(make, model, year, color, mileage){
        super()
        this.maximumPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false;
    }
    loadPassenger(num){
        if(this.passenger < this.maximumPassengers){
            if((num + this.passenger) <= this.maximumPassengers){
                availableRoom == true
                this.passenger = this.passenger + num;
                return this.passenger
            }
            else{
                availableRoom == false
                console.log("There's not enough room for more passengers")
            }
        } else{
            console.log("That's more passengers than this car can hold")
        }
    }
    start(){
        if(this.fuel >= 0){
            start == true
            console.log("Engine has started")
        }
        else{
            start == false
            console.log("Not enough fuel to start")
        }
    }
    scheduleService(mileage){
        if(mileage > 30000){
            this.scheduleService == true
            console.log("This vehicle should be serviced")
        }
    }
}