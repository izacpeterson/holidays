var d = new Date();
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
document.getElementById("Date").innerHTML =
  weekday[d.getDay()] +
  ", " +
  months[d.getMonth()] +
  " " +
  d.getDate() +
  " " +
  d.getFullYear();
