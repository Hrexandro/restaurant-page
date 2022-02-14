import loadHomepage from './home.js'

let header = document.createElement('header');
let navbar = document.createElement('nav');

document.body.appendChild(header);
header.appendChild(navbar);

function addLinkToNavbar (name, reference){
    let link = document.createElement('a')
    link.href = reference;
    link.textContent = name;
    navbar.appendChild(link);
}

addLinkToNavbar('Home','#')
addLinkToNavbar('Menu','#')
addLinkToNavbar('Contact','#')



loadHomepage();

