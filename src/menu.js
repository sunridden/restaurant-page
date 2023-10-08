import Ramen from '../dist/img/ramen.png';
import Udon from '../dist/img/udon.jpeg';
import Pizza from '../dist/img/pizza.jpeg';
import Boba from '../dist/img/boba.jpeg';
import Burger from '../dist/img/cheeseburger.jpeg';
import Dessert from '../dist/img/dessert.jpeg';
import Pancake from '../dist/img/pancake.png';
import Spaghetti from '../dist/img/spaghetti.jpeg';

export default function loadMenu() {
    const menu = document.createElement('div');
    const ramenImg = new Image(); ramenImg.src = Ramen;
    const udonImg = new Image(); udonImg.src = Udon;
    const pizzaImg = new Image(); pizzaImg.src = Pizza;
    const bobaImg = new Image(); bobaImg.src = Boba;
    const burgerImg = new Image(); burgerImg.src = Burger;
    const dessertImg = new Image(); dessertImg.src = Dessert;
    const pancakeImg = new Image(); pancakeImg.src = Pancake;
    const spaghettiImg = new Image(); spaghettiImg.src = Spaghetti;

    menu.appendChild(ramenImg);
    menu.appendChild(udonImg);
    menu.appendChild(pizzaImg);
    menu.appendChild(bobaImg);
    menu.appendChild(burgerImg);
    menu.appendChild(dessertImg);
    menu.appendChild(pancakeImg);
    menu.appendChild(spaghettiImg);

    return menu;

}