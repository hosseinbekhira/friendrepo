let userInput = document.getElementById("user");
let passwordInput = document.getElementById("pass");
let formElement = document.getElementById("formClassid");

formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  if (userInput.value === "admin" && passwordInput.value === "admin") {
    window.location.href = "info.html";
  } else {
    userInput.value = "";
    passwordInput.value = "";
    let alertDiv = document.createElement("div");
    let alertDiveText = document.createTextNode("Informations incorrectes");
    alertDiv.appendChild(alertDiveText);
    alertDiv.className = "alert alert-danger";
    formElement.appendChild(alertDiv);
    userInput.onfocus = function () {
      alertDiv.remove();
    };
    passwordInput.onfocus = function () {
      alertDiv.remove();
    };
  }
});
