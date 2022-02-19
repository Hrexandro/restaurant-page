import './style.css';
import loadHomepage from './home.js';
import icon from './icon.png';
import treble from './treble.png'
import loadContactPage from './contact.js';
import loadMenuPage from './menu.js';

let content = document.createElement('div');
console.log(content)
content.setAttribute('id', 'content');
console.log(document.body)
document.body.appendChild(content);

const trebleIconLink = document.createElement('link')
document.head.appendChild(trebleIconLink)
trebleIconLink.rel = 'icon';
trebleIconLink.href = treble;

let header = document.createElement('header');

content.appendChild(header);

function addLinkToHeader(name, reference) {
    let link = document.createElement('a')
    link.href = reference;
    link.setAttribute('id',`${name}-link`);
    link.textContent = name;
    header.appendChild(link);
}

addLinkToHeader('Home', '#')
addLinkToHeader('Menu', '#')
addLinkToHeader('Contact', '#')

let main = document.createElement('main');
content.appendChild(main);
main.setAttribute('id', 'main')

let footer = document.createElement('footer');
content.appendChild(footer)

let footerText = document.createElement('p');
footer.appendChild(footerText)
footerText.textContent = 'Made by Hrexandro'

let gitHubLink = document.createElement('a')
gitHubLink.setAttribute('id','git-hub-link')
gitHubLink.href = 'https://github.com/Hrexandro'
footer.appendChild(gitHubLink);

let gitHubIcon = new Image();
gitHubIcon.src = icon;
gitHubIcon.setAttribute('id','git-hub-icon')

gitHubLink.appendChild(gitHubIcon);

loadHomepage();

function clearPage(){
    main.innerHTML = "";
}

function addPageSwitch (elementId, action){
    document.getElementById(elementId).addEventListener('click',()=>{
        if (elementId==="Home-link"){
            main.style.cssText = "";
        }
        else {
            main.style.cssText = "display: flex; justify-content: center;"
        }
        if (elementId==="Menu-link"){
            main.style.backgroundColor = "white";
        }

        clearPage();
        action();
    })

}

addPageSwitch('Home-link',loadHomepage);
addPageSwitch('Contact-link',loadContactPage);
addPageSwitch('Menu-link',loadMenuPage);

console.log(main)

export {main};
