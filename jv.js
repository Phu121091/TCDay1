function Car(make,speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed +=10;
    console.log(`Xe ${this.make} đi với tốc độ ${this.speed} km/h `);
}

Car.prototype.brake = function(){
    this.speed -=5;
    console.log(`Xe ${this.make} đi với tốc độ ${this.speed} km/h `);
}

const BMW = new Car("BMW",120);
console.log(BMW);
const Mercedes = new Car("Mercedes",95);
console.log(Mercedes);

BMW.accelerate();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();

Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.brake();
Mercedes.brake();
