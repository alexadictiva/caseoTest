dropdownButton = document.getElementById("dropdownButton");
var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");
var span3 = document.getElementById("span3");

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

window.onscroll = function (e) {
  var element = document.getElementById("header");
  var dropdownMenu = document.getElementById("dropdownMenu");
  element.classList.add("change");
  dropdownMenu.classList.add("change");
};
