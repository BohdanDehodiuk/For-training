// console.log("hallo");

// const { log } = require("console");

// // Will run first
// console.log("First log");

// setTimeout(() => {
//   // Will run last, after 2000 milliseconds
//   console.log("Second log");
// }, 2000);

// // Will run second
// console.log("Third log");
// const greet = () => {
//   console.log("Hello!");
// };

// const timerId = setTimeout(greet, 3000);

// clearTimeout(timerId);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let timerId = null;

// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });

// stopBtn.addEventListener("click", () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });
// ====================================================================================

// const date = new Date();

// console.log(date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(date.toString());
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(new Date(0));
// // "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

// console.log(new Date(20000));
// // "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"
// console.log(date.getTime()); // 1624021654154

// const teamMeetingDate = new Date("October 23, 2020");
// console.log(teamMeetingDate);
// // "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"

// const preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00");
// console.log(preciseTeamMeetingDate);
// "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"
// new Date("2030-03-16");
// new Date("2030-03");
// new Date("2030");
// new Date("03/16/2030");
// new Date("2030/03/16");
// new Date("2030/3/16");
// new Date("March 16, 2030");
// new Date("March 16, 2030 14:25:00");
// new Date("2030-03-16 14:25:00");
// new Date("2030-03-16T14:25:00");
// new Date("16 March 2030");

// const date = new Date(2030, 2, 16, 14, 25, 0, 0);
// console.log(date);
// Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)

// const date = new Date();
// console.log("Date: ", date);

// // Возвращает день месяца от 1 до 31
// console.log("getDate(): ", date.getDate());

// // Возвращает день недели от 0 до 6
// console.log("getDay(): ", date.getDay());

// // Возвращает месяц от 0 до 11
// console.log("getMonth(): ", date.getMonth());

// // Возвращает год из 4 цифр
// console.log("getFullYear(): ", date.getFullYear());

// // Возвращает час
// console.log("getHours(): ", date.getHours());

// // Возвращает минуты
// console.log("getMinutes(): ", date.getMinutes());

// // Возвращает секунды
// console.log("getSeconds(): ", date.getSeconds());

// // Возвращает миллисекунды
// console.log("getMilliseconds(): ", date.getMilliseconds());

// const date = new Date();
// console.log("Date: ", date);

// // Возвращает день месяца от 1 до 31
// console.log("getUTCDate(): ", date.getUTCDate());

// // Возвращает день недели от 0 до 6
// console.log("getUTCDay(): ", date.getUTCDay());

// // Возвращает месяц от 0 до 11
// console.log("getUTCMonth(): ", date.getUTCMonth());

// // Возвращает год из 4 цифр
// console.log("getUTCFullYear(): ", date.getUTCFullYear());

// // Возвращает час
// console.log("getUTCHours(): ", date.getUTCHours());

// // Возвращает минуты
// console.log("getUTCMinutes(): ", date.getUTCMinutes());

// // Возвращает секунды
// console.log("getUTCSeconds(): ", date.getUTCSeconds());

// // Возвращает миллисекунды
// console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());
// const date = new Date("March 16, 2030 14:25:00");
// console.log(date);

// date.setMinutes(50);
// // "Sat Mar 16 2030 14:50:00 GMT+0200"
// console.log(date);
// date.setFullYear(2040, 4, 8);
// // "Tue May 08 2040 14:50:00 GMT+0300"
// console.log(date);

// const date = new Date("March 16, 2030 14:25:00");
// console.log(date);

// date.toString();
// console.log(date.toLocaleString());
// // "Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

// date.toTimeString();
// // "14:25:00 GMT+0200 (Eastern European Standard Time)"

// date.toLocaleTimeString();
// // "2:25:00 PM"

// date.toUTCString();
// // "Sat, 16 Mar 2030 12:25:00 GMT"

// date.toDateString();
// // "Sat Mar 16 2030"

// date.toISOString();
// // "2030-03-16T12:25:00.000Z"

// date.toLocaleString();
// // "3/16/2030, 2:25:00 PM"

// date.getTime();
// // 1899894300000
// ===============================================================

// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });
// console.log(new Promise());
// =========================================================

// Change value of isSuccess variable to call resolve or reject
// const isSuccess = 1;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Will run first
// console.log("Before promise.then()");

// // Registering promise callbacks
// promise.then(
//   // onResolve will run third or not at all
//   (value) => {
//     console.log("onResolve call inside promise.then()");
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   (error) => {
//     console.log("onReject call inside promise.then()");
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// // Will run second
// console.log("After promise.then()");

// =================================================================
// Change value of isSuccess variable to call resolve or reject
// const isSuccess = 0;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ======================================================

// Change value of isSuccess variable to call resolve or reject
// const isSuccess = 0;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// promise
//   .then((value) => console.log(value)) // "Success! Value passed to resolve function"
//   .catch((error) => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log("Promise settled")); // "Promise settled"

// ================================================================

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then((value) => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then((value) => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then((value) => {
//     console.log(value); // 30
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Final task");
//   });

// =============================================================

// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess("success value");
//     } else {
//       onError("error");
//     }
//   }, 2000);
// };

// const onFetchSuccess = (user) => {
//   console.log(user);
// };

// const onFetchError = (error) => {
//   console.error(error);
// };

// fetchUserFromServer("Mango", onFetchSuccess, onFetchError);

// ==============================================================

// const fetchUserFromServer = (username) => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;

//       if (isSuccess) {
//         resolve("success value");
//       } else {
//         reject("error");
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer("Mango")
//   .then((user) => console.log(user))
//   .catch((error) => console.error(error));

// =======================================================================

// const makePromise = (text, delay) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);

// Promise.all([promiseA, promiseB])
//   .then((value) => console.log(value)) //["promiseA value", "promiseB value"]
//   .catch((error) => console.log(error));

// ===============================================================
// const makePromise = (text, delay) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);

// Promise.race([promiseA, promiseB])
//   .then((value) => console.log(value)) // "promiseA value"
//   .catch((error) => console.log(error));

// ==============================================================

// Fulfilled promise
// new Promise((resolve) => resolve("success value")).then((value) =>
//   console.log(value)
// );

// Promise.resolve("success value").then((value) => console.log(value));

// // Rejected promise
// new Promise((resolve, reject) => reject("error")).catch((error) =>
//   console.error(error)
// );

// Promise.reject("error").catch((error) => console.error(error));

// =================================================================

// const makeGreeting = (guestName) => {
//   if (guestName === "" || guestName === undefined) {
//     return {
//       success: false,
//       message: "Guest name must not be empty",
//     };
//   }

//   return {
//     success: true,
//     message: `Welcome ${guestName}`,
//   };
// };

// const result = makeGreeting("Mango");

// if (result.success) {
//   console.log(result.message);
// } else {
//   console.error(result.message);
// }

// const makeGreeting = (guestName, onSuccess, onError) => {
//   if (guestName === "" || guestName === undefined) {
//     return onError("Guest name must not be empty");
//   }
//   onSuccess(`Welcome ${guestName}`);
// };

// makeGreeting(
//   "Mango",
//   (greeting) => console.log(greeting),
//   (error) => console.error(error)
// );

// const makeGreeting = (guestName) => {
//   if (guestName === "" || guestName === undefined) {
//     return Promise.reject("Guest name must not be empty");
//   }

//   Promise.resolve(`Welcome ${guestName}`);
// };

// makeGreeting("Mango")
//   .then((greeting) => console.log(greeting))
//   .catch((error) => console.error(error));
// ============================================================================

// let body = document.body;
// const PROMPT_DELAY = 1000;

// const buttonStart = document.querySelector("button[data-start]");
// const buttonStop = document.querySelector("button[data-stop]");

// const colorChange = {
//   promptCounter: 0,
//   intervalId: null,
//   isActive: false,

//   start() {
//     if (this.isActive) {
//       return;
//     }

//     const hasDisable = buttonStop.hasAttribute("disabled");
//     if (hasDisable) {
//       buttonStop.removeAttribute("disabled");
//     }

//     buttonStart.setAttribute("disabled", "disabled");
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       body.style.background = getRandomHexColor();
//       this.promptCounter += 1;
//     }, PROMPT_DELAY);
//   },
//   stop() {
//     if (this.isActive) {
//       clearInterval(this.intervalId);
//       buttonStop.setAttribute("disabled", "disabled");
//       buttonStart.removeAttribute("disabled");
//       this.isActive = false;
//       return;
//     }
//   },
// };

// buttonStart.addEventListener("click", () => {
//   console.log("start");
//   colorChange.start();
// });
// buttonStop.addEventListener("click", () => {
//   console.log("stop");
//   colorChange.stop();
// });

// =============================================================
// 9 - 2
// const refs = {
//   input: document.querySelector("#datetime-picker"),
//   startBtn: document.querySelector("[data-start]"),
//   daysLeft: document.querySelector("[data-days]"),
//   hoursLeft: document.querySelector("[data-hours]"),
//   minutesLeft: document.querySelector("[data-minutes]"),
//   secondsLeft: document.querySelector("[data-seconds]"),
// };

// refs.startBtn.disabled = true;

// let timerId = null;
// let choseDate = 0;
// let timeLeft = 0;
// // =====================================================================
// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,

//   onClose(selectedDates) {
//     choseDate = selectedDates[0];
//     let isNotValidDate = choseDate < options.defaultDate;
//     if (isNotValidDate) {
//       return Notiflix.Notify.failure("Please choose a date in the future");
//     }
//     refs.startBtn.disabled = false;
//   },
// };
// // ==================
// flatpickr(refs.input, options);
// // =======================================================================
// refs.startBtn.addEventListener("click", startClock);
// // =======================================================================
// function startClock() {
//   refs.startBtn.removeEventListener("click", startClock);
//   timerId = setInterval(() => {
//     let nowDate = Date.now();
//     timeLeft = choseDate - nowDate;
//     updateClockFase(convertMs(timeLeft));
//     console.log(timeLeft);
//     if (timeLeft < 1000) {
//       clearInterval(timerId);
//     }
//   }, 1000);
// }
// // =======================================================================
// function addLeadingZero(value) {
//   return String(value).padStart(2, "0");
// }
// // формули

// function updateClockFase({ days, hours, minutes, seconds }) {
//   refs.daysLeft.innerHTML = `${days}`;
//   refs.hoursLeft.innerHTML = `${hours}`;
//   refs.minutesLeft.innerHTML = `${minutes}`;
//   refs.secondsLeft.innerHTML = `${seconds}`;
// }

// // ==============================================================

// //  9 - 3

// const refs = {
//   form: document.querySelector("form"),
//   inputs: document.querySelectorAll("input"),
// };
// let inputsValue = [];
// let timerId = null;
// let counter = 0;
// // =============================================================================
// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   } else {
//     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   }
// }
// // =============================================================================
// refs.form.addEventListener("submit", startIvents);
// // =======================================
// function startIvents(e) {
//   e.preventDefault();
//   refs.inputs.forEach(getInputsValue);
//   let [delay, step, amount] = inputsValue;

//   timerId = setInterval(() => {
//     counter += 1;
//     if (amount <= counter) {
//       clearInterval(timerId);
//     }
//     createPromise(counter, delay);
//     delay += step;
//     console.log(counter);
//   }, delay);
// }
// // ===================================================
// function getInputsValue(input) {
//   return inputsValue.push(Number(input.value));
// }

// ==========================================================================================
// 10 - 1 fechCountries.js
// import Notiflix from "notiflix";
// export default class DataFetch {
//   constructor() {
//     this.searchValue = "";
//     console.log(this.searchValue);
//   }
//   fetchCountries() {
//     const URL = `https://restcountries.com/v3.1/name/${this.searchValue}?fields=name,capital,population,flags,languages,`;
//     return fetch(URL)
//       .then((response) => response.json())
//       .then((countries) => {
//         if (countries.status === 404) {
//           return Notiflix.Notify.failure(
//             `"Oops, there is no country with that name"`
//           );
//         } else if (countries.length > 10) {
//           return Notiflix.Notify.info(
//             "Too many matches found. Please enter a more specific name."
//           );
//         }
//         return countries;
//       })
//       .catch((e) => {
//         Notiflix.Notify.failure(`"Oops, there is no country with that name"`);
//       });
//   }
//   get value() {
//     return this.searchValue;
//   }
//   set value(country) {
//     this.searchValue = country;
//   }
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const {
//   name,
//   age,
//   gender = "m",
//   hairColor: color,
// } = {
//   name: "bob",
//   age: 20,
//   hairColor: "blue",
// };

// console.log(name, age, gender, color);

// let x = 2;
// let x = "hello";

// console.log(x);

// const x = 1;
// const x = "hello";

// console.log(x);

// const x;
// x = 1;

// console.log(x);

// const run = true;
// let name = "bob";

// if (run) {
//   let name = "charley";
//   console.log(name);
// }

// console.log(name);

// const MAX = 10;
// let amount = 0;

// while (amount++ < MAX) {
//   let sum = amount;
// }

// console.log(sum);

// console.log(x);
// const x = 0;
// ===============================================================================================================

// GET https://bookstore.com/api/orders
// Accept: application/json
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     // Response handling
//   })
//   .then((data) => {
//     // Data handling
//   })
//   .catch((error) => {
//     // Error handling
//   });
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     // Data handling
//   })
//   .catch((error) => {
//     // Error handling
//   });
// =============================
// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//   fetchUsers()
//     .then((users) => renderUserList(users))
//     .catch((error) => console.log(error));
// });

// function fetchUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users").then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function renderUserList(users) {
//   const markup = users
//     .map((user) => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join("");
//   userList.innerHTML = markup;
// }

// ======================================================================================

// const searchParams = new URLSearchParams({
//   _limit: 5,
//   _sort: "name",
// });

// console.log(searchParams.toString()); // "_limit=5&_sort=name"

// const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"
// ===================================================================
import pokemonCardTpl from "../src/templatespoke/pokemon-card.hbs";

const refs = {
  cardContainer: document.querySelector(".js-card-container"),
};

fetch("https://pokeapi.co/api/v2/pokemon/2")
  .then((response) => {
    return response.json();
  })
  .then((pokemon) => {
    console.log(pokemon);
    const markup = pokemonCardTpl(pokemon);
    console.log(markup);
    refs.cardContainer.innerHTML = markup;
  })
  .catch((error) => {
    console.log(error);
  });
