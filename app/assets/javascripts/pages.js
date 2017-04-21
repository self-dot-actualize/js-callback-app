function changeColors() {
  setTimeout(function() {
    document.querySelector("#first").style["color"] = "red";
    setTimeout(function() {
      document.querySelector("#second").style["color"] = "blue";
      setTimeout(function() {
        document.querySelector("#third").style["color"] = "green";
        setTimeout(function() {
          document.querySelector("#fourth").style["color"] = "orange";
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}

// WRONG WAY
// var response = $.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json');
// console.log(response);

// RIGHT WAY
$.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json', function(data) {
  console.log(data);
});
