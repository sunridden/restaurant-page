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
    homeBtn.classList.add('homeBtn');
    
    const menuBtn = document.createElement('btn');
    menuBtn.classList.add('menuBtn');

    const contactBtn = document.createElement('btn');
    contactBtn.classList.add("contactBtn");

    document.getElementById

    header.textContent = "ke's cuisine";
    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact";

    headerBtns.appendChild(homeBtn);
    headerBtns.appendChild(menuBtn);
    headerBtns.appendChild(contactBtn);

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
