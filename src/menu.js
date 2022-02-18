const loadMenuPage = () => {
    console.log('home works');

    let subtitle = document.createElement('p');
    document.getElementById('main').appendChild(subtitle);
    subtitle.textContent = "soon";
    subtitle.setAttribute('class', 'subtitle');

    let title = document.createElement('p');
    document.getElementById('main').prepend(title);
    title.textContent = "To be added";
    title.setAttribute('class', 'cursive');

    console.log('home finish');
}

export default loadMenuPage;