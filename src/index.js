import menuPage from "./menu.js";
import homePage from "./home.js";
import './styles.css';

const menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click",menuPage);

const homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click",homePage);