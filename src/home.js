import './styles/style.css';
import image from './img/restaurant-interior.jpg';

function createHomePage(){
    //Content 
    const content = document.querySelector('#content');

    const img = document.createElement('img');
    img.src = image;

    document.body.appendChild(content);
    content.appendChild(img);

    const descriptionBox = document.createElement('div');
    descriptionBox.classList.add('home-page-description');

    const descriptionHeader = document.createElement('div');
    descriptionHeader.classList.add('description-header');
    descriptionHeader.textContent = "Welcome to Savoury Heaven!";

    const description = document.createElement('div');
    description.classList.add('description');
    description.textContent = "Where every bite is a taste of culinary bliss. Indulge in our meticulously crafted dishes, each a symphony of flavor designed to elevate your dining experience. Join us and savor the exquisite harmony of tastes at Savoury Heaven.";
    
    descriptionBox.appendChild(descriptionHeader);
    descriptionBox.appendChild(description);

    content.appendChild(descriptionBox);
}

export default createHomePage;