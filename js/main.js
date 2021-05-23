var dropdownButton = document.getElementById("dropdownButton");
var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");
var span3 = document.getElementById("span3");
var header = document.getElementById("header");
var dropdownMenu = document.getElementById("dropdownMenu");
var menuLink = document.getElementById("menuLink");
var menuLink1 = document.getElementById("menuLink1");
var menuLink2 = document.getElementById("menuLink2");
var menuLink3 = document.getElementById("menuLink3");
var menuItem = document.getElementById("menuItem");
var c1 = document.getElementById("c1");
var a1 = document.getElementById("a1");
var s1 = document.getElementById("s1");
var e1 = document.getElementById("e1");
var o1 = document.getElementById("o1");

function crossMenu() {
  if (dropdownButton.checked) {
    span1.classList.add("span1");
    span2.classList.add("span2");
    span3.classList.add("span3");
  } else {
    span1.classList.remove("span1");
    span2.classList.remove("span2");
    span3.classList.remove("span3");
  }
}

window.onscroll = function () {
  /* console.log(window.scrollY); */

  if (window.onscroll >= "200") {
    header.classList.add("change");
    dropdownMenu.classList.add("change");
    span1.classList.add("changeSpan");
    span2.classList.add("changeSpan");
    span3.classList.add("changeSpan");
    menuLink.classList.add("changeLink");
    menuLink1.classList.add("changeLink");
    menuLink2.classList.add("changeLink");
    menuLink3.classList.add("changeLink");
    c1.setAttribute("src", "./assets/img/c1.svg");
    a1.setAttribute("src", "./assets/img/a1.svg");
    s1.setAttribute("src", "./assets/img/s1.svg");
    e1.setAttribute("src", "./assets/img/e1.svg");
    o1.setAttribute("src", "./assets/img/o1.svg");
  }
};
