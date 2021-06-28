window.addEventListener("scroll", progresar);
var main = document.querySelector("main");

function progresar() {
  var progreso = document.documentElement.scrollTop;
  //console.log(progreso); /*cantidad de pixeles q se mueve el scroll*/
  if (progreso >= 200) {
    var header = document.querySelector("header");
    var menuContainer = document.querySelector(".menuContainer");
    var letter1 = document.getElementById("letter1");
    var letter2 = document.getElementById("letter2");
    var letter3 = document.getElementById("letter3");
    var letter4 = document.getElementById("letter4");
    var letter5 = document.getElementById("letter5");
    header.style.background = "#f4a727";
    menuContainer.style.background = "#f4a727";
    letter1.style.fill = "#ffffff";
    letter2.style.fill = "#ffffff";
    letter3.style.fill = "#ffffff";
    letter4.style.fill = "#ffffff";
    letter5.style.fill = "#ffffff";
  } else {
    var header = document.querySelector("header");
    var menuContainer = document.querySelector(".menuContainer");
    var letter1 = document.getElementById("letter1");
    var letter2 = document.getElementById("letter2");
    var letter3 = document.getElementById("letter3");
    var letter4 = document.getElementById("letter4");
    var letter5 = document.getElementById("letter5");
    header.style.background = "#ffd213";
    menuContainer.style.background = "#ffd213";
    letter1.style.fill = "#333333";
    letter2.style.fill = "#333333";
    letter3.style.fill = "#333333";
    letter4.style.fill = "#333333";
    letter5.style.fill = "#333333";
  }
}
