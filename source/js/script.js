const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");
const pageHeader = document.querySelector(".page-header");
const pageMain = document.querySelector(".page-main");

pageHeader.classList.add("page-header--closed");
pageMain.classList.add("page-main--js");
navMain.classList.remove("main-nav--nojs");
navMain.classList.add("main-nav--closed");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    pageHeader.classList.remove("page-header--closed");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    pageHeader.classList.add("page-header--closed");
  }
});
