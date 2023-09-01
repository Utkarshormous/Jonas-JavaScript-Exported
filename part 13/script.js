"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//Selecting Class Elements

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const heaader = document.querySelector(".header");
// const allSections = document.querySelectorAll(".section");
// console.log(allSections);
document.getElementById("section--1");

const allButtons = document.getElementsByTagName("button");
console.log(allButtons);
console.log(document.getElementsByClassName("btn"));

//Creating and Inserting Elements

const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "We Use cookies For Improved Functionalities";
message.innerHTML =
  "We Use cookies For Improved Functionalities <button class = 'btn btn--close-cookie'>Got It!</button>";
heaader.prepend(message);
// If we want that message up and down in webpage then we can do this by writing the below code
// heaader.append(message.cloneNode(true));

//Delete EleMents
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    //message.remove()
    // DOM TRAVERSING
    // Usual method of representing removal of message
    message.parentElement.removeChild(message);
  });

//Styles
message.style.background = "#37383d";
message.style.width = "120%";
//This .style attribute only works for inline styles ,it will not work for height wagera.
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + "px";
//Here all the --color-primary (root folder of css) button or text is being replaced by the orangered
document.documentElement.style.setProperty("--color-primary", "orangered");

//Attributes(src ,class ,id ,alt)
const logo = document.querySelector(".nav__logo");
//Only Statndard Attributes are read
console.log(logo.alt);

//For Non Standard attributes
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "bankist");

//Relative and absolute one
console.log(logo.src); //Absolute
console.log(logo.getAttribute("src")); //Relative

const link = document.querySelector(".twitter-link");
console.log(link.href);
console.log(link.getAttribute("href"));

//Data Attributes
//we have to convert the - sign with camelCasing
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add("c", "j");
logo.classList.remove("c", "z");
logo.classList.toggle("c");
// logo.clasList.contains("c");

//Dont use it will overwrite all the classes
//logo.className="utkarsh"

//Button Scrolling

const section1 = document.querySelector("#section--1");
const btnScrollto = document
  .querySelector(".btn--scroll-to")
  .addEventListener("click", function (e) {
    //Here to scroll to the next section we should need to get the coordinates in order to get this function work
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);

    console.log(e.target.getBoundingClientRect());

    console.log("Current scroll(X/Y)", window.pageXOffset, pageYOffset);

    console.log(
      "height/width viewport",
      document.documentElement.clientHeight,
      document.documentElement.clientWidth
    );

    // Scrolling
    // This top and left is relative to the veiwport and not to the learn More button
    window.scrollTo({
      left: s1coords.left + window.pageXOffset,
      top: s1coords.top + window.pageYOffset,
      behavior: "smooth",
    });

    section1.scrollIntoView({ behavior: "smooth" });
  });
const h1 = document.querySelector("h1");
//We can also add and remove the events if we want in our way by making a seperate variable
const alertH1 = function (e) {
  alert(`You're Hovering Over The Heading`);

  h1.removeEventListener("mouseenter", alertH1);
};
h1.addEventListener("mouseenter", alertH1);

setTimeout(() => h1.removeEventListener);

//Event Propagation Concept Explained Below

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => {
//   return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// };

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("LINK", e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   //STOP PROPAGATION
//   // e.stopPropagation();
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("CONTAINER", e.target, e.currentTarget);
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("NAV", e.target, e.currentTarget);
// });

//PAGE NAVIGATION

// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("LINK");
//     //We Cannot simply Write this.href because we will get absolute URL.
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

//1.Add Event Listener To A Common Parent
//2.Determine what element originated to the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  console.log(e.target);

  // Matching Strategy in order to match the specific clicking events only
  if (e.target.classList.contains("nav__link")) {
    console.log("LINK");
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//DOM TRAVERSING

// //Going Downwards : Bascially Selecting Child Elements

// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = "white";
// h1.lastElementChild.style.color = "orangered";

// h1.closest(".header").style.background = "var(--gradient-secondary)";
// h1.closest("h1").style.background = "var(--gradient-primary)";

// //Going Sideways : Bascially siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = "scale(0.5)";
// });

//Tabbed Components
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContents = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  //We can simply write e.target but whenever we clicks on the number in the button it will open the span element inorder to resolve this issue
  //we will be simply using the closest method in order to fix this issue.
  console.log(clicked);
  //Guard Clause
  if (!clicked) return;
  //Remove Active Tabs

  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContents.forEach((c) =>
    c.classList.remove("operations__content--active")
  );

  //Active Tab

  clicked.classList.add("operations__tab--active");

  //Activate Content Area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});
const nav = document.querySelector("nav");

nav.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = 0.5;
    });
    logo.style.opacity = 0.5;
  }
});

nav.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = 1;
    });
    logo.style.opacity = 1;
  }
});

//STICKY NAVIGATION
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener("scroll", function (e) {
//   console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add("sticky");
//   } else nav.classList.remove("sticky");
// });

//STICKY NAVIGATION : INTERSECTION OBSERVER API
// const obscallBack = function (entries, observers) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };
// const obsOptions = { root: null, threshold: 0.1 };

// const observer = new IntersectionObserver(obscallBack, obsOptions);

// observer.observe(section1);

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
//Main Line to implement the logic
headerObserver.observe(header);

//Reveal Sections
const allSections = document.querySelectorAll(".section");

const revealSections = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

//Lazy Loading Images

const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  //Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});
imgTargets.forEach((img) => imgObserver.observe(img));

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

//LIFECYCLE OF DOM
document.addEventListener("DOMContentLoaded", function (e) {
  console.log("HTML parsed and DOM tree bulit!", e);
});

window.addEventListener("load", function (e) {
  console.log("Page Fully Loaded", e);
});

// window.addEventListener("beforeunload", function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = "message";
// });
