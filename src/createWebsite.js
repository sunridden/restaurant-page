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
    homeBtn.classList.add('homeBtn', 'btn');

    const menuBtn = document.createElement('btn');
    menuBtn.classList.add('menuBtn', 'btn');

    const contactBtn = document.createElement('btn');
    contactBtn.classList.add('contactBtn', 'btn');

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

    // Tab-browsing logic to display page based on what button is selected
    const btns = document.querySelectorAll('.btn');
    btns.forEach((button) => {
        button.addEventListener('click', buttonInput);
    });
    
    const homePage = document.querySelector('.home-page');
    const menuPage = document.querySelector('.menu');
    const contactPage = document.querySelector('.contact');
    
    function buttonInput() {
        if (this.classList.contains('homeBtn')) {
            homePage.style.display = 'block';
            menuPage.style.display = 'none';
            contactPage.style.display = 'none';
        } else if (this.classList.contains('menuBtn')) {
            homePage.style.display = 'none';
            menuPage.style.display = 'flex';
            contactPage.style.display = 'none';
        } else if (this.classList.contains('contactBtn')) {
            homePage.style.display = 'none';
            menuPage.style.display = 'none';
            contactPage.style.display = 'block';
        }
    }
}
