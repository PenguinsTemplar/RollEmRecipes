class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    myFirstVehicle() { 
        return `My vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
    honk() {
        return 'MeepMeep.';
    }
}


//container of the vehicle subclasses
class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
}
// extened classes
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return 'VROOM!!!';
    }
}

const garage = new Garage(2);
const myFirstCar  = new Car('Toyota', 'Corolla', 1980);
const myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
console.log(garage.add("Taco")); // "Only vehicles are allowed in here!"
console.log(garage.add(myFirstCar, myFirstMotorcycle));
console.log(garage)

