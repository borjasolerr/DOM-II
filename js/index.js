// Your code goes here
const container = document.querySelector(".home");
const buttons = document.querySelectorAll(".btn");
const header = document.querySelector(".main-navigation");
const title = document.querySelector("h1");
const img = document.querySelector(".img-content");
const body = document.querySelector("body");
const navItems = document.querySelectorAll("nav a");
const navLink = document.querySelector(".nav"); // NAV LINKS

container.addEventListener("dblclick", event => {
  event.target.style.border = "1px solid blue";
});

window.addEventListener("resize", () => {
  header.style.backgroundColor = "yellow";
});

window.addEventListener("scroll", () => {
  console.log("Scrooolling");
});

window.addEventListener("keydown", () => {
  body.style.color = "red";
});

navLink.addEventListener("click", event => {
  event.target.style.color = "blue";
  alert("Not an available option!");
});

title.addEventListener("mouseover", () => {
  title.style.color = "blue";
});

window.addEventListener("load", () => {
  alert("All loaded!");
});

img.addEventListener("dragstart", () => {
  alert("Not an available option");
});

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = "blue";
    event.target.style.color = "#fff";
    event.target.style.cursor = "pointer";
  });
}

buttons.forEach(function(event) {
  event.addEventListener("mouseleave", function() {
    event.textContent = "Done!";
  });
});

// PREVENT DEFAULT

navItems.forEach(link =>
  link.addEventListener("click", () => {
    link.preventDefault;
    console.log("Default prevented");
  })
);
