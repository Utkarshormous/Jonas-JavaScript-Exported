"use strict";

// const Person = function (firstName, Birthyear) {
//   //Instance Properties
//   this.firstName = firstName;
//   this.Birthyear = Birthyear;
//   //NEVER DO THIS IN A CONSTRUCTOR
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.Birthyear);
//   //   };
// };
// const utkarsh = new Person("Utkarsh", 2002);
// console.log(utkarsh);
// const yashu = new Person("Yashu", 2005);
// const manas = new Person("Manas", 2001);
// console.log(yashu, manas);

// console.log(utkarsh instanceof Person);

// //STEPS TO CREATE A CONSTRUCTOR FUNCTION
// //1. New {} is created
// //2. function is called , this ={}
// //3. {} linked to prototype
// //4. function autopmatically return {}

// //Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2023 - this.Birthyear);
// };

// utkarsh.calcAge();

// console.log(utkarsh.__proto__);
// //Object.prototype(Top of prototype Chain)
// console.log(utkarsh.__proto__.__proto__);
// console.log(utkarsh.__proto__.__proto__.__proto__);
// console.log(utkarsh.__proto === Person.prototype);

// console.log(utkarsh.hasOwnProperty("firstName"));
// console.log(utkarsh.hasOwnProperty("species"));
// console.log(Person.prototype.isPrototypeOf(utkarsh));
// console.log(Person.prototype.isPrototypeOf(yashu));

// console.dir(Person.prototype.constructor);

// const arr = [2, 3, 4, 5, 6, 7, 6, 9, 8, 0, 2, 8, 9, 0];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());
// const h1 = document.querySelector("h1");
// console.log(h1);

//CODING CHALLENGE
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// const BMMMMW = new Car("BMW", 120);
// const Mer = new Car("Mercedes", 95);
// console.log(BMMMMW);
// console.log(Mer);

// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(`${this.make} Speed is ${this.speed}`);
// };
// BMMMMW.accelerate();
// BMMMMW.accelerate();
// Mer.accelerate();
// Car.prototype.reduce = function () {
//   this.speed = this.speed - 10;
//   console.log(`${this.make} Brakes At ${this.speed}`);
// };

// BMMMMW.reduce();
// BMMMMW.reduce();
// Mer.reduce();
// Mer.reduce();

//Class Declaration
class PersonCl {
  constructor(firstName, Birthyear) {
    this.firstName = firstName;
    this.Birthyear = Birthyear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log("Hey there 👋");
    console.log(this);
  }
}

const utkarsh = new PersonCl("Utkarsh", 2002);
console.log(utkarsh);
utkarsh.calcAge();
utkarsh.greet();
console.log(utkarsh.__proto__ === PersonCl.prototype);

//1.Classes Are Not Hoisted : This Means we can use them before they are declared.
//2.Classes Are First Class Citizens which means they could be passed into function and could be return from the function
//3.Classes Are Excuted In Strict Mode

const account = {
  owner: "Utkarsh",
  movements: [250, 699, 234, 450, 265],

  get latest() {
    return this.movement.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },

  get age() {
    return 2023 - this.Birthyear;
  },
};

account.latest = 50;
console.log(account.movements);

PersonCl.hey();

const PersonProto = {
  calcAge() {
    console.log(2037 - this.Birthyear);
  },
};

const yashu = Object.create(PersonProto);
console.log(yashu);

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelrate() {
    this.speed = this.speed + 10;
    console.log(`${this.make} speeds at ${this.speed}`);
  }
  reduce() {
    this.speed = this.speed - 5;
    console.log(`${this.make} speeds at ${this.speed}`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelrate();
ford.accelrate();
ford.reduce();

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype.introduce = function () {
  console.log(`My Name is ${this.firstName} And I Am Pursing ${this.course}`);
};

const manas = new Student("Manas", 2002, B.E);
console.log(manas);
manas.introduce();
