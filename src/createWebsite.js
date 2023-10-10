import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import '../dist/style.css';

function createHeader() {
    const navbar = document.createElement('div');
    navbar.classList.add("navbar");

    const header = document.createElement('h1');
    header.classList.add("header");

    const headerBtns = document.createElement('nav');
    headerBtns.classList.add("header-btns");

    const homeBtn = document.createElement('btn');
    const menuBtn = document.createElement('btn');
    const aboutBtn = document.createElement('btn');

    header.textContent = "ke's cuisine";
    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    aboutBtn.textContent = "About";

    headerBtns.appendChild(homeBtn);
    headerBtns.appendChild(menuBtn);
    headerBtns.appendChild(aboutBtn);

    navbar.appendChild(header);
    navbar.appendChild(headerBtns);

    return navbar;
}

function createHome() {
    const home = loadHome();
    return home;
}

function createMenu() {
    const menu = loadMenu();
    return menu;
}

export default function loadWebsite() {
    const content = document.getElementById('content'); 
    content.appendChild(createHeader());
    content.appendChild(createHome());
    content.appendChild(createMenu());
    content.appendChild(loadContact());
}
