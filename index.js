import "./styles.css";
import  {loadHomePage, clearPage, slideTimeoutId, slideIndex} from "./home.js";
import  loadMenuPage from "./menu.js";
import  loadContactPage from "./contact.js";
console.log('test');


loadHomePage();

const homeBtn = document.querySelector("#home-button");
const menuBtn = document.querySelector("#menu-button");
const contactBtn = document.querySelector("#contact-button");

homeBtn.addEventListener('click', ()=>{
    clearPage();
    loadHomePage();
});

menuBtn.addEventListener('click', ()=>{
    clearPage();
    loadMenuPage();
});

contactBtn.addEventListener('click', ()=>{
    clearPage();
    loadContactPage();
});


