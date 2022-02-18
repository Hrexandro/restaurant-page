import mapImage from './map.png';

const loadContactPage = () => {
    let main = document.getElementById('main');
    main.style.cssText = "display: flex; justify-content: center;"


    let contact = document.createElement('div');
    main.appendChild(contact);
    contact.setAttribute('id','contact')
    let phone = document.createElement('p');
    contact.appendChild(phone);
    phone.textContent = "📞 123 456 789";
    //subtitle.setAttribute('class', 'subtitle');

    let address = document.createElement('p');
    contact.appendChild(address);
    address.textContent = "🏠 2722 Weekley Street, San Antonio, TX";
    //title.setAttribute('class', 'cursive');

    let map = new Image();
    map.src = mapImage;
    map.setAttribute('id','map')
    contact.appendChild(map)

}

export default loadContactPage;