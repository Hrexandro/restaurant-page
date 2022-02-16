import loadHomepage from './home.js'

// TO DO:
// SET THE OTHER PAGES WITH CONTENT
// ADD PAGE SWITCHING LOGIC TO index.JS
let content = document.createElement('div');
content.setAttribute('id','content');
document.body.appendChild(content);


let header = document.createElement('header');
let navbar = document.createElement('nav');

let styleSheet = document.createElement('link');
styleSheet.href = 'style.css';
styleSheet.rel = 'stylesheet';
document.head.appendChild(styleSheet);

content.appendChild(header);
header.appendChild(navbar);

let subtitle = document.createElement('h2');
header.prepend(subtitle);
subtitle.textContent = "Restaurant"

let title = document.createElement('h1');
header.prepend(title);
title.textContent = "Symphonie"

function addLinkToNavbar (name, reference){
    let link = document.createElement('a')
    link.href = reference;
    link.textContent = name;
    navbar.appendChild(link);
}

addLinkToNavbar('Home','#')
addLinkToNavbar('Menu','#')
addLinkToNavbar('Contact','#')

let main = document.createElement('main');
content.appendChild(main);
main.setAttribute('id','main')

let footer = document.createElement('footer');
content.appendChild(footer)
footer.textContent = 'Made by Hrexandro'



loadHomepage();

