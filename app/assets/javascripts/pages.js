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
