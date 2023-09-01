"use strict";
//Default Parameters
// const bookings = [];

// const createBooking = function (flightNum, numPass = 1, price = 200 * numPass) {
//   const booking = {
//     flightNum,
//     numPass,
//     price,
//   };
//   bookings.push(booking);
//   console.log(bookings);
// };

// createBooking("UK912", 5);

// const flight = "UK912";
// const utkarsh = {
//   name: "Utkarsh Shrivastava",
//   passport: 1234567890,
// };

// const checkBooking = function (flights, passenger) {
//   const flight = "UK999";
//   passenger.name = `Mr.` + passenger.name;

//   if (passenger.passport === 1234567890) {
//     alert(`Checked In`);
//   } else {
//     alert(`Not Checked In`);
//   }
// };

// checkBooking(flight, utkarsh);
// console.log(flight);
// console.log(utkarsh);

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };
// //Higher-Order Function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed String: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer("JavaScript is the best", upperFirstWord);
// transformer("JavaScript is the best", oneWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greetHey = greet("hey");
// greetHey("Utkarsh");

// //We Can Write This Also

// greet("Hey")("Utkarsh");

// //Arrow Function

// const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greetArrow("Hey")("Manas");

const lufthansa = {
  airline: "lufthansa",
  iataCode: "LH -",
  bookings: [],

  //Function To Be Formed

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({
      flightDetails: `${this.iataCode} ${flightNum}`,
      name,
    });
  },
};

lufthansa.book(269, "Utkarsh Shrivastava");
lufthansa.book(258, "Yashu Shrivastava");

const vistara = {
  airline: "Vistara",
  iataCode: "UK -",
  bookings: [],
};

const book = lufthansa.book;

//Does not work
//book(234 , 'Manas Shrivastava')

//Here Now The This KeyWord Will Point to the first argument as specified when .call is used

book.call(vistara, 254, "Manas Shrivastava");
console.log(vistara);

const indigo = {
  airline: "Indigo",
  iataCode: "6E -",
  bookings: [],
};

book.call(indigo, 238, "Nate River");
console.log(indigo);

const flightData = [569, "Tom Cruise"];
//There are two ways to extract data in form of array first by apply method and second by using spread operator

//1st Way
book.apply(vistara, flightData);
console.log(vistara);

//2nd Way
book.call(indigo, ...flightData);
console.log(indigo);

const bookUK = book.bind(vistara);
const book6E = book.bind(indigo);
const bookLH = book.bind(lufthansa);

bookUK(23, "Light Yagami");
book6E(229, "Utkarsh Shrivastava");

const bookUK69 = book.bind(vistara, 69);

//Immediately Invoked Function Expression
(function () {
  console.log(`This is immediately invoked function expression`);
})();

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();


