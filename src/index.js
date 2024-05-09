import './styles/style.css';
import image from './img/restaurant-interior.jpg';
import createHomePage from './home';
import createMenu from './menu';
import createAbout from './about';

//Create Nav bar
const nav = document.querySelector('nav');
const homeBtn = document.createElement('button');
const menuBtn = document.createElement('button');
const aboutBtn = document.createElement('button');

homeBtn.classList.add('nav-bar-btns');
homeBtn.textContent = 'Home';
menuBtn.classList.add('nav-bar-btns');
menuBtn.textContent = 'Menu';
aboutBtn.classList.add('nav-bar-btns');
aboutBtn.textContent = 'About';

nav.appendChild(homeBtn);
nav.appendChild(menuBtn);
nav.appendChild(aboutBtn);

// //Create conent section
// const content = document.querySelector('#content');

// const img = document.createElement('img');
// img.src = image;

// document.body.appendChild(content);
// content.appendChild(img);




homeBtn.addEventListener('click', function() {
    clearScreen();
    createHomePage();
});

menuBtn.addEventListener('click', function() {
    clearScreen();
    createMenu();
});

aboutBtn.addEventListener('click', function() {
    clearScreen();
    createAbout();
});


function clearScreen() {
    const content = document.querySelector('#content'); // Assuming the content is within a main element
    content.innerHTML = ''; // Remove all content within the main element
}


createHomePage();



