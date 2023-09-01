"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (a, b) {
    return [this.starterMenu[a], this.mainMenu[b]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time} to ${this.location}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPizza: function (mainIngredients, ...starterIngredients) {
    console.log(mainIngredients);
    console.log(starterIngredients);
  },
};

// Working With Strings - Part 1
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat 😬");
  else console.log("You got lucky 😎");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("jonas"));
console.log(typeof new String("jonas"));

console.log(typeof new String("jonas").slice(1));
const passenger = "uTkaRsh";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing Emails
const email = "utkarshshrivastavajee@gmail.com";
const login = "    UtkarshSHrivastavaJEe@Gmail.com";
const loginEmail = login.toLowerCase().trim();
console.log(loginEmail);

const priceRs = "269.69 Rs";
const priceUs = priceRs.replace(".", ",").replace("Rs", "$");
console.log(priceUs);
const announcement = `All the passengers are requested to come to boarding door 23.I Repeat please come to boarding door 23 ASAP.`;
console.log(announcement.replaceAll("door", "gate"));
//3 Methods Which Return Booleans
const planeJ = "Airbus A320NEO";
console.log(planeJ.startsWith("Airb"));
console.log(planeJ.includes("A320"));
console.log(planeJ.endsWith("NEO"));

//Practice Excercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log(`You're not allowed in this plane`);
  } else {
    console.log(`You're allowed to carry`);
  }
};

checkBaggage("I have some food and a Gun");
checkBaggage("I have Socks , clothes and camera");
checkBaggage("I have some sort of fruits and A KNIFE to cut it");

//Split method
console.log("Utkarsh Shrivastava".split(" "));
const [firstName, lastName] = "Utkarsh Shrivastava".split(" ");
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const captializeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    //Method 1
    // namesUpper.push(n[0].toUpperCase() + n.slice(1))
    //Method 2
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

captializeName(`utkarsh manas shrivastava`);

//Padding

const message = `Go To Boarding Gate 23!`;
console.log(message.padStart(20, "+").padEnd(30, "+"));

//Credit Card Example Of Hiding Digits
const maskCreditCard = function (number) {
  const str = number + " ";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(7367473987498798));
console.log(maskCreditCard(367473987493552));
console.log(maskCreditCard(4621738218772188));

// REPEAT
const message2 = "Bad waether... All Departues Delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛩".repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

// restaurant.orderDelivery({
//   starterIndex: 1,
//   mainIndex: 2,
//   time: "11:30",
// });
// // 1) Destructing
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [Pizza, , Risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(Pizza, Risotto, otherFood);

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// //2) Functions
// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }

//   console.log(sum);
// };

// add(5, 8);
// add(8, 2, 4, 3, 5, 1);
// add(9, 3);

// const x = [23, 13, 15];
// add(...x);

// restaurant.orderPizza("mushroom", "garlic", "onion", "capscuim");

// //Practical Example

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("Mushroom", "Spinach");
// }
// restaurant.orderPizza && restaurant.orderPizza("Mushroom", "Spinach");

// const rest1 = {
//   name: "Leo",
//   numGuests: 20,
// };

// const rest2 = {
//   name: "messi",
//   owner: "CSK",
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// console.log(rest1);
// console.log(rest2);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1} : ${el}`);
// }

// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// let openStr = `We are Open for ${properties.length} days at : `;
// for (const property of properties) {
//   openStr += `${property}`;
// }

// console.log(openStr);

// //PROPERTY VALUES
// const values = Object.values(restaurant.openingHours);
// console.log(values);

// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// //[key , value]

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and Close at ${close}`);
// }

// //Best Way To Write A Map

// const ques = new Map([
//   ["question", "Which Is The Best Programming Language In The World ?"],
//   [1, "C++"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct 🎉"],
//   [false, "Incorrect :("],
// ]);
// console.log(ques);
// //Convert Objects To Map : Make A Map Inside A Map It will convert map containing object into Map.

// console.log(Object.entries(restaurant.openingHours));
// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);
// console.log(typeof hoursMap);

// //Quiz App
// console.log(ques.get("question"));

// for (const [key, value] of ques) {
//   if (typeof key === "number") {
//     console.log(`Answer ${key} : ${value}`);
//   }
// }

// //
// const answer = 3;
// console.log(answer);

// //The below Line of code certainly helps to play with boolean values to get the correct answer

// console.log(ques.get(ques.get("correct") === answer));

// //Convert Map to Array

// console.log([...ques]);
//SETS

// const orderSet = new Set([
//   "pizza",
//   "pizza",
//   "pasta",
//   "noodles",
//   "pasta",
//   "noodles",
//   "pizza",
// ]);

// console.log(orderSet);
// console.log(new Set("harsh"));
// console.log(orderSet.size);
// console.log(orderSet.has("pizza"));
// console.log(orderSet.has("soup"));
// orderSet.add("garlic bread");
// orderSet.delete("noodles");

// console.log(orderSet);

// //MAPS

// const rest = new Map();
// rest.set("name", "pizzaMania");
// rest.set(1, "pizzaHut");
// console.log(rest.set(2, "dominos"));

// rest
//   .set("categories", ["Italian", "Chinese", "Indian", "French", "American"])
//   .set(12, "open")
//   .set(24, "close")
//   .set(true, "We Are Open Today")
//   .set(false, "We are close today :(");
// //TO ACCESS THE NAME OF OF THE PARTICULAR SET
// console.log(rest.get("name"));
// //Type of Datatype matter
// console.log(rest.get(true));

// const time = 8;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// rest.delete(2);

// //On Hovering Over h1 we can easily see the heading which is being inserted in it.
// rest.set(document.querySelector("h1"), "Heading");

// console.log(rest);
// //rest.clear()
// console.log(rest.size);

//OPTIONAL CHAINING(very useful method replaces if else method)
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ["mon", "tue", "wed", "thu", "fri", "sat"];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? closed;
//   Here We can use nullish collasing operator
//   console.log(`On ${day} we open at ${open}`);
// }

// const user = [{ name: "Utkarsh", email: "utkarshshrivastavajee@gmail.com" }];

// console.log(user[0]?.name ?? "User Not Defined");
// console.log(restaurantName, hours, venue);

//In Order For deStructring first we always have to initialise the value

// let a = 111;
// let b = 9999;
// let c;
// const obj = { a: 23, b: 7, c: 24 };
// ({ a, b, c } = obj);
// console.log(a, b, c);

// //NESTED OBJECTS
// const {
//   fri: { open, close },
// } = restaurant.openingHours;
// console.log(open, close);

// DESTRUCTURING ARRAYS

// const arr = [2, 4, 6];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;

// console.log(main, secondary);

// [main, secondary] = [secondary, main];

// console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// const [item1, item2] = restaurant.order(2, 0);
