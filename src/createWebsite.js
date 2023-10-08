import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import '../dist/style.css';

function createHeader() {
    const navbar = document.createElement('div');

    const header = document.createElement('h1');
    header.classList.add("header");

    const list = document.createElement('ul');
    const homeBtn = document.createElement('li');
    const menuBtn = document.createElement('li');
    const aboutBtn = document.createElement('li');

    header.textContent = "ke's cuisine";
    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    aboutBtn.textContent = "About";

    list.appendChild(homeBtn);
    list.appendChild(menuBtn);
    list.appendChild(aboutBtn);

    navbar.appendChild(header);
    navbar.appendChild(list);

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
