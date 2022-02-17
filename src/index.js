import './style.css';


const loadHomepage = () => {
    console.log('home works')

    let subtitle = document.createElement('p');
    document.getElementById('main').appendChild(subtitle);
    subtitle.textContent = "Restaurant"

    let title = document.createElement('p');
    document.getElementById('main').prepend(title);
    title.textContent = "Symphonie"
    title.setAttribute('class', 'cursive')

    console.log('home finish')
}

let content = document.createElement('div');
console.log(content)
content.setAttribute('id', 'content');
console.log(document.body)
document.body.appendChild(content);


let header = document.createElement('header');
let navbar = document.createElement('nav');
//dodaj to jak już będzie stylesheet
// let styleSheet = document.createElement('link');
// styleSheet.href = 'style.css';
// styleSheet.rel = 'stylesheet';
// document.head.appendChild(styleSheet);

content.appendChild(header);
header.appendChild(navbar);


function addLinkToNavbar(name, reference) {
    let link = document.createElement('a')
    link.href = reference;
    link.textContent = name;
    navbar.appendChild(link);
}

addLinkToNavbar('Home', '#')
addLinkToNavbar('Menu', '#')
addLinkToNavbar('Contact', '#')

let main = document.createElement('main');
content.appendChild(main);
main.setAttribute('id', 'main')

let footer = document.createElement('footer');
content.appendChild(footer)
footer.textContent = 'Made by Hrexandro'




loadHomepage();