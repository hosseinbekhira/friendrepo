function init() {
  let today = new Date();
  let date =
    "Date : " +
    today.getFullYear() +
    "-" +
    today.getMonth() +
    "-" +
    today.getDate();

  let date2 =
    "Prochaine sortie : " +
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getDate();

  document.getElementById("p1").innerHTML = date;
  document.getElementById("p2").innerHTML = date2;

  // get Meteo
  const API_KEYS = "b18e8b676cb0a865ffd8d46a14c15cc2";
  const country = "france";
  const city = "paris";

  document.getElementById("p3").innerHTML = `Pays: ${country}`;
  document.getElementById("p4").innerHTML = `Ville: ${city}`;

  $.getJSON(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEYS}`,
    function (data) {
      document.getElementById(
        "p5"
      ).innerHTML = `Tempreature: ${data.main.temp}`;
      document.getElementById(
        "p6"
      ).innerHTML = `Description: ${data.weather[0].description}`;
    }
  );

  let dist = "Distance moyenne :  /";
  document.getElementById("p7").innerHTML = dist;
}
