/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */
class Vechile {
  #numberOfSeats = 2;
  constructor(config = {}) {
    this.make = config.make;
    this._model = config.model;
    this.#numberOfSeats = config.numberOfSeats;
  }

  get model() {
    return this._model;
  }
  set model(newModel) {
    this._model = newModel;
  }

  drive() {
    console.log(`You turn on engine at ${this.make} ${this.model}`);
  }
}

class Car extends Vechile {
  #maxFuelTankCapacity = 55;
  constructor(config = {}) {
    // this === null
    super(config);
    if (config.fuelTankCapacity <= this.#maxFuelTankCapacity) {
      this.fuelTankCapacity = config.fuelTankCapacity;
    }
  }
}

class HotWeels extends Car {
  constructor(make, model, fuelTankCapacity, numberOfSeats, power) {
    super(make, model, fuelTankCapacity, numberOfSeats);
    this.power = power;
  }
}

class Truck extends Vechile {
  #maxFuelTankCapacity = 150;
  constructor(make, model, fuelTankCapacity, numberOfSeats) {
    super(make, model, numberOfSeats);
    if (fuelTankCapacity <= this.#maxFuelTankCapacity) {
      this.fuelTankCapacity = fuelTankCapacity;
    }
  }

  loadCapacity() {}
}
const car1 = new Car({
  model: 'Camry',
  fuelTankCapacity: 50,
  make: 'Toyota',
  numberOfSeats: 4,
});
console.log('car1:', car1);

const configCar2 = {
  make: 'Nissan',
  model: '350Z',
  fuelTankCapacity: 30,
  numberOfSeats: 2,
};
const car2 = new Car(configCar2);
console.log('car2:', car2);
// console.log(car1.model);
// const truck1 = new Truck('Ford', 'F150', 80, 6);
// console.log('truck1:', truck1);
// truck1.drive();
// const hotWeel1 = new HotWeels('Toyota', 'Supra', 40, 2, '1000 kWt');
// console.log('hotWeel1:', hotWeel1);
// hotWeel1.drive();
