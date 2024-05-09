import './styles/style.css';
import image from './img/restaurant-interior.jpg';

function createHomePage(){
    const main = document.createElement('main');

    const img = document.createElement('img');
    img.src = image;

    document.body.appendChild(main);
    main.appendChild(img);

    const description = document.createElement('div');
    description.classList.add('home-page-description');
    description.textContent = "Welcome to our restaurant!";

    main.appendChild(description);


}

createHomePage()

