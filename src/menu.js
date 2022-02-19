import {main} from './index.js'

const loadMenuPage = () => {
    let dishDiv = document.createElement('div');
    dishDiv.setAttribute('id','dish-div')
    main.appendChild(dishDiv);

    let menuTitle = document.createElement('h1')
    dishDiv.appendChild(menuTitle);
    menuTitle.textContent = 'Menu'

    menuTitle.setAttribute('class', 'cursive');

    function generateDishEntry(name,description){
        let dishName = document.createElement('h3');


        dishDiv.appendChild(dishName);
        dishName.textContent = name

        let dishDescription = document.createElement('p')
        dishDiv.appendChild(dishDescription);
        dishDescription.innerText = description

        let menuhr = document.createElement('hr')
        dishDiv.appendChild(menuhr);
    }

    generateDishEntry('Foie gras','Goose liver pâté fried in duck fat, rich and delicate.')
    generateDishEntry('Semifreddo','Smooth and creamy Italian dessert.')
    generateDishEntry('Beluga caviar','Roe of the endangered Beluga sturgeon, served on toast.')

}

export default loadMenuPage;