function changeColors() {
  setTimeout(function() {
    document.querySelector("#first").style["color"] = "red";
  }, 2000);

  setTimeout(function() {
    document.querySelector("#second").style["color"] = "blue";
  }, 4000);
}
