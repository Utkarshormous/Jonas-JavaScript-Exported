// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: { team1: 1.33, x: 3.25, team2: 6.5 },
// };

// // const goals = Object.keys(game.scored) + 1;
// // console.log(goals);

//Coding Challenge 1

// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, "Thiago", "Coutinho", "Periscic"];

//Coding Challenge 2
// //ANS 1)
// const playerName = Object.entries(game.scored);
// console.log(playerName);

// for (const [key, player] of playerName) {
//   const print = `Goal ${Number(key) + 1} scored by ${player}`;
//   console.log(print);
// }

// //Ans 2
// let average = 0;
// const oddds = Object.values(game.odds);
// for (let odd of oddds) {
//   average += odd;
// }
// average = average / oddds.length;
// console.log(average);

// //Ans 3
// for(const [team , odd ] of Object.entries(game.odds)) {
// const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
// console.log(`Odd of victory ${teamStr} : ${odd}`)
// }

//Odd of victory Bayern Munich: 1.33
//Odd of draw: 3.25
//Odd of victory Borrussia Dortmund: 6.5

//Coding Challenge 3

// const gameEvents = new Map([
//   [17, "⚽ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽ GOAL"],
//   [80, "⚽ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

// // 1
// const myGame = new Set(gameEvents.values());
// const events = [...myGame];
// console.log(events);

// //2
// gameEvents.delete(64);
// console.log(gameEvents);

// //3
// const noOfEvents = gameEvents.size;
// const eventHappen = 90 / noOfEvents;
// console.log(`An event happened, on average, every ${eventHappen} minutes`);

// //4 Here Min denotes key and value denotes value
// for (const [min, value] of gameEvents) {
//   const half = min <= 45 ? "FIRST" : "SECOND";
//   console.log(`[${half} HALF] ${min} : ${value}`);
// }

//Coding Challenge 4

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector('button').addEventListener('click' , function(){
  const text = document.querySelector("textarea").value;
  console.log(text)
})
