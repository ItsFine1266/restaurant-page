import "./styles.css";
import loadPage from "./script.js";
import loadMenuContent from "./menu.js";
import loadAboutContent from "./about.js";

const content = document.querySelector("#content");
const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const aboutButton = document.querySelector(".about");

homeButton.addEventListener("click", () => {
  content.textContent = "";
  loadPage();
});

menuButton.addEventListener("click", () => {
  content.textContent = "";
  loadMenuContent();
});

aboutButton.addEventListener("click", () => {
  content.textContent = "";
  loadAboutContent();
});

loadPage();
