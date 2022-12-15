/** @format */

function searchcity(city) {
  city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
  document.querySelector("#CCity").innerHTML = `📍  ${city}`;
  let apiKey = "210d99196a88b9257ed8cb3535a0a0c5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#inputCity").value;
  let newCity = `${searchInput}`;
  newCity = newCity.charAt(0).toUpperCase() + newCity.slice(1).toLowerCase();
  let citysearch = `${searchInput}`;
  document.querySelector("#CCity").innerHTML = `📍  ${newCity}`;
  searchcity(searchInput);
}
let form = document.querySelector("#city");
form.addEventListener("submit", search);
let button = document.querySelector("#btn");
button.addEventListener("click", search);

function showTemp(response) {
  console.log(response);
  let tempo = Math.round(response.data.main.temp);
  currentemp.innerHTML = `🌡️${tempo}℃`;
  let newCity = response.data.name;
  let country = response.data.sys.country;
  document.querySelector("#CCity").innerHTML = `📍  ${newCity} / ${country}`;
  let mini = Math.round(response.data.main.temp_min);
  console.log(mini);
  let max = Math.round(response.data.main.temp_max);
  console.log(max);
  let descr = response.data.weather[0].main;
  let windi = response.data.wind.speed;
  let hum = response.data.main.humidity;
  wind.innerHTML = `🌬️ ${windi}km/h`;
  humidity.innerHTML = `💧 ${hum}%`;
  desc.innerHTML = ` ${descr} `;
  console.log(telorance);
  telorance.innerHTML = `${max}/${mini}℃`;
  //minmax.innerHTML= "Hi";
}
//${max}/${mini}℃
let telorance = document.querySelector("#minmaxx");
let currentemp = document.querySelector("#Ctemp");
let desc = document.querySelector("#desc");
let wind = document.querySelector("#wind");
let humidity = document.querySelector("#humidity");

//let celc = document.querySelector("#celc");
//celc.addEventListener("click", FtoC);
//faren.addEventListener("click", CtoF);
//let faren = document.querySelector("#faren");
//let temp = document.querySelector("#temp");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let now = new Date();
let base = now.getDay();
let hours = now.getHours();
let min = now.getMinutes();
let newtime = hours;

if (min < 10) {
  min = `0${min}`;
}

if (hours > 12) {
  hours2 = hours - 12;
  if (hours2 < 10) {
    newtime = ` 0${hours2} : ${min} PM`;
  } else {
    newtime = ` ${hours2} : ${min} PM`;
  }
}
if (hours === 12) {
  newtime = ` ${hours} : ${min} PM`;
}
if (hours < 12) {
  if (hours < 10) {
    newtime = ` 0${hours} : ${min} AM`;
  } else {
    newtime = ` ${hours} : ${min} AM`;
  }
}

let time = document.querySelector("#time");
time.innerHTML = `${newtime}`;

let day = days[base];
let today = document.querySelector("#today");
today.innerHTML = `${day}`;
let first = document.querySelector("#first");
let firstday = base + 1;
if (firstday > 6) {
  firstday = firstday - 7;
}
first.innerHTML = `${days[firstday]}`;

let sec = document.querySelector("#sec");
firstday = firstday + 1;
if (firstday > 6) {
  firstday = firstday - 7;
}
sec.innerHTML = `${days[firstday]}`;


let third = document.querySelector("#third");
firstday = firstday + 1;
if (firstday > 6) {
  firstday = firstday - 7;
}
third.innerHTML = `${days[firstday]}`;

let forth = document.querySelector("#forth");
firstday = firstday + 1;
if (firstday > 6) {
  firstday = firstday - 7;
}
forth.innerHTML = `${days[firstday]}`;

let fifth = document.querySelector("#fifth");
firstday = firstday + 1;
if (firstday > 6) {
  firstday = firstday - 7;
}
fifth.innerHTML = `${days[firstday]}`;

function searchlocation(position) {
  let apiKey = "210d99196a88b9257ed8cb3535a0a0c5";
  let apiUrl = `https:api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showTemp);
}

function getcurrent(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchlocation);
}
let btnlocation = document.querySelector("#currentbtn");
btnlocation.addEventListener("click", getcurrent);
searchcity("Tehran");
