import './styles/style.css';
import image from './img/restaurant-interior.jpg';

function createMenu () {
    const content = document.querySelector('#content');

    const menuBox = document.createElement('div');
    menuBox.classList.add('menu-box');

    //Main Courses
    const maindish = document.createElement('section');
    maindish.classList.add('main-dish');

    const maindishTitle = document.createElement('div');
    maindishTitle.textContent = 'MAIN COURSES';
    maindishTitle.classList.add('menu-titles');
    maindish.appendChild(maindishTitle);

    // Main Course Items
    const mainCourseItems = [
        'Grilled Salmon - Grilled salmon fillet served with roasted vegetables and lemon herb sauce.',
        'Chicken Marsala - Tender chicken breast sautéed with mushrooms and Marsala wine sauce, served with mashed potatoes.',
        'Vegetable Stir Fry - Mixed vegetables stir-fried in a savory soy ginger sauce, served over rice.',
        'Steak Frites - Grilled sirloin steak served with crispy French fries and chimichurri sauce.',
    ];

    const mainDishList = document.createElement('ul');
    mainCourseItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        mainDishList.appendChild(listItem);
    });

    maindish.appendChild(mainDishList);



    //Appetizers
    const appetizers = document.createElement('section');
    appetizers.classList.add('appetizers');

    const appetizerTitle = document.createElement('div');
    appetizerTitle.textContent = 'APPETIZERS';
    appetizerTitle.classList.add('menu-titles');
    appetizers.appendChild(appetizerTitle);

    // Appetizer Items
    const appetizerItems = [
        'Bruschetta - Toasted bread topped with fresh tomatoes, basil, garlic, and olive oil.',
        'Caprese Salad - Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.',
        'Garlic Shrimp Skewers - Grilled shrimp skewers marinated in garlic and herbs.',
        'Spinach and Artichoke Dip - Creamy spinach and artichoke dip served with tortilla chips.',
    ];

    const appetizerList = document.createElement('ul');
    appetizerItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        appetizerList.appendChild(listItem);
    });

    appetizers.appendChild(appetizerList);


    menuBox.appendChild(maindish);
    menuBox.appendChild(appetizers);

    content.appendChild(menuBox);
}

export default createMenu;