class Car {

  constructor({speed = 0, price, maxSpeed, isOn =false, distance =0}){
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  static getSpecs(car){
  return console.log(car);
  }
  
  get price(){
    return this._price; 
  }

  set price(newPrice){
    this._price = newPrice
    return this._price; 
  }
  
  
  turnOn() {
    
      return this.isOn= true;
      
    
  }

  
  turnOff() {
    
      this.isOn =false;
      this.speed = 0;
      
    
  }

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
    this.speed=this.speed + value;
    if(this.speed<=this.maxSpeed){
      return this.speed;
    }
  }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    const result = this.speed - value;
    if(this.speed>=0){
      this.speed= result;
      return this.speed;
    }
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    if(this.isOn){
      this.distance = this.distance + hours*this.speed;
      return console.log(this.distance);
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

console.log(mustang);