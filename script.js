/*https://national-api-day.herokuapp.com/api/today*/

/*function fetchHoliday() {
  var d = new Date();
  var monthToday = d.getMonth() + 1;

  var todayDate =
    "https://national-api-day.herokuapp.com/api/date?month=" +
    monthToday +
    "&day=" +
    d.getDate();
  console.log(todayDate);
  fetch(todayDate)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.holidays);
      const todayHoliday = data.holidays;
      for (i = 0; i < todayHoliday.length; i++) {
        /*var node = document.createElement("LI");
        var textnode = document.createTextNode(todayHoliday[i]);
        node.appendChild(textnode);
        document.getElementById("holidayList").appendChild(node);*/

/*var a = document.createElement("a");
        var ulist = document.getElementById("holidayList");
        var newItem = document.createElement("li");

        a.textContent = todayHoliday[i];
        a.setAttribute(
          "href",
          "https://www.google.com/search?q=" + todayHoliday[i]
        );
        a.setAttribute("target", "_blank");
        newItem.appendChild(a);
        ulist.appendChild(newItem);
      }
    });
}*/

function setToday() {
  var d = new Date();
  fetchDate(d.getMonth(), d.getDate());
  document.getElementById("monthSelect").value = d.getMonth() + 1;
  document.getElementById("dateSelect").value = d.getDate();
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var monthSelect = urlParams.get("monthSelect");
var dateSelect = urlParams.get("dateSelect");
console.log(monthSelect);
console.log(dateSelect);

if (monthSelect == null) {
  var d = new Date();
  console.log("IT WAS NULL");
  fetchDate(d.getMonth() + 1, d.getDate());
  document.getElementById("monthSelect").value = d.getMonth() + 1;
  document.getElementById("dateSelect").value = d.getDate();
} else {
  fetchDate(monthSelect, dateSelect);
  document.getElementById("monthSelect").value = monthSelect;
  document.getElementById("dateSelect").value = dateSelect;
}

async function fetchDate(m, d) {
  var todayDate =
    "https://national-api-day.herokuapp.com/api/date?month=" + m + "&day=" + d;
  let response = await fetch(todayDate);
  var jsonDate;
  if (response.ok) {
    jsonDate = await response.json();
    updatePage(jsonDate.holidays);
  } else {
    alert("Error. The holiday API broke");
    console.log("loser");
  }
  console.log(jsonDate.holidays);
}

function updatePage(todayHoliday) {
  for (i = 0; i < todayHoliday.length; i++) {
    var a = document.createElement("a");
    var ulist = document.getElementById("holidayList");
    var newItem = document.createElement("li");

    a.textContent = todayHoliday[i];
    a.setAttribute(
      "href",
      "https://www.google.com/search?q=" + todayHoliday[i]
    );
    a.setAttribute("target", "_blank");
    newItem.appendChild(a);
    ulist.appendChild(newItem);
  }
}
document.body.requestFullscreen();
