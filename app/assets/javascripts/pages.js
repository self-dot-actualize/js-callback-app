/* global $ */
$.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json', function(data) {
  console.log(data);
  document.querySelector("#data").innerHTML = data;
});
