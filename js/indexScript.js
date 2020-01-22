$(document).ready(function () {



    var nav = document.getElementById("side");
    if (nav.style.width === '250px') {
      nav.style.width = '0px';
      first.className = "returnHam";
      second.style.background = "white";
      third.className = "returnHam";
      hamburger.style.position = "absolute";
    }


});


function accordion(b) {
  var sidelink = ["option1", "option2", "option3"];
  var arrow = ["dn1", "dn2", "dn3"];

  var h = document.getElementById(sidelink[b]);
  var k = document.getElementById(arrow[b]);

  sidelink.splice(b, 1);
  arrow.splice(b, 1);
  var i;

  if (h.style.maxHeight) {
    h.style.maxHeight = null;
    k.className = "more";
  } else {

    h.style.maxHeight = h.scrollHeight + "px";
    k.className = "less";
    for (i = 0; i < sidelink.length; i++) {
      document.getElementById(sidelink[i]).style.maxHeight = null;
      document.getElementById(arrow[i]).className = "more";
    }
  }
}





//animation for navbar hamburger menu
function toggleNav() {
  var nav, first, second, third, hamburger;
  nav = document.getElementById("side");
  first = document.getElementById("first");
  second = document.getElementById("second");
  third = document.getElementById("third");
  hamburger = document.getElementById("hamburger");

  //changing css properties
  if (nav.style.width === '100%') {
    nav.style.width = '0px';
    first.className = "returnHam";
    second.style.background = "white";
    third.className = "returnHam";
    hamburger.style.position = "absolute";


  } else {
    nav.style.width = '100%';
    first.className = "firstHam";
    second.style.background = "transparent";
    third.className = "lastHam";
    hamburger.style.position = "fixed";

  }
}

