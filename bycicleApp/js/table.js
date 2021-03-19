function init() {
  $.getJSON("https://bicycleinfo0803.herokuapp.com/users", function (data) {
    var table = document.getElementById("myTable");

    for (var i = 0; i < data.users.length; i++) {
      var row = `<tr>
							<td>${data.users[i].key}</td>
							<td>${data.users[i].firstName}</td>
							<td>${data.users[i].lastName}</td>
					  </tr>`;
      table.innerHTML += row;
    }
  });
}
