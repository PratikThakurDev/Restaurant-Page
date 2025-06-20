import menuPage from "./menu.js";
import homePage from "./home.js";
import contactPage from "./contact.js";
import './styles.css';

homePage()

const menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click",menuPage);

const homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click",homePage);

const contactBtn = document.querySelector(".contact");
contactBtn.addEventListener("click",contactPage);