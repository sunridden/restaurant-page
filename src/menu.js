import '../dist/style.css';
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
    menu.classList.add("menu");

    const udonImg = new Image(); udonImg.src = Udon;
    const ramenImg = new Image(); ramenImg.src = Ramen;
    const pizzaImg = new Image(); pizzaImg.src = Pizza;
    const bobaImg = new Image(); bobaImg.src = Boba;
    const burgerImg = new Image(); burgerImg.src = Burger;
    const dessertImg = new Image(); dessertImg.src = Dessert;
    const pancakeImg = new Image(); pancakeImg.src = Pancake;
    const spaghettiImg = new Image(); spaghettiImg.src = Spaghetti;

    //Creates new menu items to be displayed
    menu.appendChild(
        createMenuItem(udonImg, 'Udon', 'Dive into a bowl of thick, chewy udon noodles, bathed in savory broth and paired with an arrray of fresh ingredients.')
    );
    menu.appendChild(createMenuItem(ramenImg, 'Ramen', 'Authentic Japanese ramen: Delight in a steaming bowl of tender noodles immersed in a savory, aromatic broth.'));
    menu.appendChild(createMenuItem(pizzaImg, 'Pizza', 'Artisanal Wood-Fired Pizza: Indulge in the perfect harmony of crisp, hand-stretched dough, topped with premium ingredients, and baked to perfection in our wood-fired oven.'));
    menu.appendChild(createMenuItem(bobaImg, 'Boba', 'Dive into a world of delightful tapioca pearls and refreshing tea infusions!'));
    menu.appendChild(createMenuItem(burgerImg, 'Cheeseburger', 'Savor the timeless perfection of a juicy, flame-grilled patty smothered in melted cheese, and nestled in a fresh bun.'));
    menu.appendChild(createMenuItem(dessertImg, 'Dessert', 'Treat yourself to a blissful symphony of creamy, hand-churned ice creams!'));
    menu.appendChild(createMenuItem(pancakeImg, 'Pancake', 'Indulge in a stack of light and fluffy pancakes, served with a generous dollop of creamy butter and syrup.'));
    menu.appendChild(createMenuItem(spaghettiImg, 'Spaghetti and Meatballs', 'Enjoy a comforting plate of al dente spaghetti topped with homemade meatballs, bathed in our rich, slow-slimmered tomato sauce.'));

    return menu;

}

function createMenuItem(img, name, description) {

    const newItem = document.createElement('div');
    newItem.classList.add("menu-item");

    const itemName = document.createElement('h2');
    itemName.textContent = name;
    itemName.classList.add("item-name");

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;

    newItem.appendChild(img);
    newItem.appendChild(itemName);
    newItem.appendChild(itemDescription);

    return newItem;
}