/* global $ */
$.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json', function(data) {
  var htmlString = "";
  for (var i = 0; i < data.length; i++) {
    htmlString += '<h2 onmousedown="changeEmployee(this)">' + data[i].name + '</h2>';
    htmlString += '<p>' + data[i].department + '</p>';
  }
  document.querySelector("#data").innerHTML = htmlString;
});

function changeEmployee(headerTag) {
  headerTag.style["color"] = "gray";
}
