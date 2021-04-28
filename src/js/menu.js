import menuTemplate from '../templates/menu-cards.hbs';
import menu from '../menu.json';
const createMenu = document.querySelector(".js-menu");

createMenu.insertAdjacentHTML('beforeend', menuTemplate({ menu }));