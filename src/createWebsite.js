export default function createHeader() {
    const navbar = document.createElement('div');
    const header = document.createElement('h1');
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
