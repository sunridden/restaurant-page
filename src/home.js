import Ramen from '../dist/img/ramen.png'

export default function loadHome() {
    const home = document.createElement('div');
    home.classList.add("home-page");
    const homeText = document.createElement('h3');
    homeText.classList.add("home-text");
    const homeDescription = document.createElement('p');
    const ramenImg = new Image();
    ramenImg.src = Ramen;
    ramenImg.classList.add("home-img");

    homeText.textContent = "Come on down for some delicious cuisine!";
    homeDescription.textContent = "Made with passion since 1998";
    
    home.appendChild(homeText);
    home.appendChild(ramenImg);
    home.appendChild(homeDescription);

    return home;
}