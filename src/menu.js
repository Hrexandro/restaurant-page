import {main} from './index.js'

const loadMenuPage = () => {

    function generateDishEntry(){
        let dishDiv = document.createElement('div');
        let dishName = document.createElement('h3');

        main.appendChild(dishDiv);
        dishDiv.appendChild(dishName);
        dishName.textContent = "Foie Grass"


    }

    generateDishEntry()


}

export default loadMenuPage;