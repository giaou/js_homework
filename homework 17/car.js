class Car {
  brand;
  model;
  speed = 0;
  isTrunkOpen;

  constructor(carDetails) {
    this.brand = carDetails.brand;
    this.model = carDetails.model;
    this.isTrunkOpen = carDetails.isTrunkOpen;
  }

  displayInfo() {
    return `${this.brand} ${this.model}, Speed: ${this.speed} km/h`;
  }

  go() {
    if (this.speed + 5 <= 200 && this.isTrunkOpen === false) {
      console.log("moving");
      this.speed += 5;
    } else console.log("cannot move");
  }

  brake() {
    console.log("braking");
    if (this.speed - 5 >= 0) this.speed -= 5;
  }

  openTrunk() {
    console.log(this.speed);
    if (this.speed > 0) {
      console.log("car is moving! cannot open the trunk");
      this.isTrunkOpen = false;
    } else {
      this.isTrunkOpen = true;
      console.log("trunk is open!");
    }
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car {
  acceleration;

  constructor(raceCarDetails) {
    super(raceCarDetails);
    this.acceleration = raceCarDetails.acceleration;
  }

  go() {
    console.log("moving");
    if (this.speed + this.acceleration <= 300) {
      this.speed += this.acceleration;
    }
  }

  openTrunk() {
    console.log(`this is a racecar so it does not have a trunk`);
  }
  closeTrunk() {
    console.log(`this is a racecar so it does not have a trunk`);
  }
}

const toyota = new Car({
  brand: "Toyota",
  model: "Corolla",
  isTrunkOpen: false,
});

const tesla = new Car({ brand: "Tesla", model: "Model 3", isTrunkOpen: false });

const raceCar = new RaceCar({
  brand: "McLaren",
  model: "F1",
  acceleration: 20,
});

console.log("Toyota starts to move");
toyota.go();
toyota.openTrunk();
toyota.go();
toyota.go();
toyota.brake();
toyota.brake();
toyota.brake();
toyota.openTrunk();
toyota.go();
toyota.closeTrunk();
toyota.go();
console.log(toyota.displayInfo());

console.log("Tesla starts to move");
console.log(tesla.speed);
tesla.openTrunk();
tesla.go();
tesla.go();
tesla.brake();
tesla.closeTrunk();
tesla.go();
console.log(tesla.displayInfo());

console.log("McLaren starts to move");
raceCar.go();
raceCar.go();
raceCar.brake();
raceCar.openTrunk();
console.log(raceCar.displayInfo());
