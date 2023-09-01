"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");


// const getCountry = function (country) {
//   //AJAX Country Call
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     //Render Country 1
//     renderCountry(data);

//     //Get NeighBour Country
//     const neighbour = data.borders?.[0];

//     if (!neighbour) return;

//     //AJAX CALL 2
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener("load", function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, "neighbour");
//     });
//   });https://www.msn.com/en-in/news/India/meet-ias-officer-smita-sabharwal-youngest-to-be-posted-at-cm-s-office-cracked-upsc-exam-at-22-got-air/ar-AA1eNCvF?cvid=433f1d1d87d04e43a487dc565c629020
// };
// getCountry("USA");

// const getCountry = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => response.json())
//     .then((data) => {renderCountry(data[0])
//     const neighbour = data[0].borders?.[0]

//     if(!neighbour) return;

//     fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//     })
// };
// getCountry("India");

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    }) //json method will return a promise itself
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
      const neighbour = data[0]?.borders?.[0];

      if (!neighbour) return;

      //Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data, "neighbour"));
};

getCountryData("India");

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0]}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0]}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
