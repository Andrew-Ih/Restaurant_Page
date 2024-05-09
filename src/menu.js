import './styles/style.css';
import image from './img/restaurant-interior.jpg';

function createMenu () {
    const content = document.querySelector('#content');

    const img = document.createElement('img');
    img.src = image;

    document.body.appendChild(content);
    content.appendChild(img);

    const menuBox = document.createElement('div');
    menuBox.classList.add('menu-box');

    const maindish = document.createElement('section');
    maindish.classList.add('main-dish');

    const maindishTitle = document.createElement('div');
    maindishTitle.textContent = 'MAIN COURSES';
    maindishTitle.classList.add('menu-titles');
    maindish.appendChild(maindishTitle);


    const appetizers = document.createElement('section');
    appetizers.classList.add('appetizers');

    const appetizerTitle = document.createElement('div');
    appetizerTitle.textContent = 'APPETIZERS';
    appetizerTitle.classList.add('menu-titles');
    appetizers.appendChild(appetizerTitle);


    menuBox.appendChild(maindish);
    menuBox.appendChild(appetizers);

    content.appendChild(menuBox);
}

export default createMenu;