import mapImage from './map.png';
import {main} from './index.js';

const loadContactPage = () => {
    let contact = document.createElement('div');
    main.appendChild(contact);
    contact.setAttribute('id','contact')
    let phone = document.createElement('p');
    contact.appendChild(phone);
    phone.textContent = "📞 123 456 789";


    let address = document.createElement('p');
    contact.appendChild(address);
    address.textContent = "🏠 2722 Weekley Street, San Antonio, TX";

    let map = new Image();
    map.src = mapImage;
    map.setAttribute('id','map')
    contact.appendChild(map)

}

export default loadContactPage;