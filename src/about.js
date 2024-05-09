import './styles/style.css';
import image from './img/restaurant-interior.jpg';


function createAbout() {
    const content = document.querySelector('#content');

    const img = document.createElement('img');
    img.src = image;

    document.body.appendChild(content);
    content.appendChild(img);

    const descriptionBox = document.createElement('div');
    descriptionBox.classList.add('home-page-description');

    const descriptionHeader = document.createElement('div');
    descriptionHeader.classList.add('description-header');
    descriptionHeader.textContent = "Welcome to Heaven!";

    const description = document.createElement('div');
    description.classList.add('description');
    description.textContent = "Welcome to Savoury Heaven, where culinary passion meets artistry. Since [year], we've been delighting diners in [location] with our innovative approach to dining.Our chefs bring creativity and expertise to every dish, crafting culinary masterpieces that celebrate the richness of flavors and the diversity of culinary traditions.At Savoury Heaven, we're more than just a restaurant; we're a community of food lovers united by our shared love for exceptional food and hospitality. Join us and experience the magic of Savoury Heaven.";
    
    descriptionBox.appendChild(descriptionHeader);
    descriptionBox.appendChild(description);

    content.appendChild(descriptionBox);
}

export default createAbout;