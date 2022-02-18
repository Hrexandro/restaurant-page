const loadHomepage = () => {
    console.log('home works');

    let subtitle = document.createElement('p');
    document.getElementById('main').appendChild(subtitle);
    subtitle.textContent = "RESTAURANT";
    subtitle.setAttribute('class', 'subtitle');

    let title = document.createElement('p');
    document.getElementById('main').prepend(title);
    title.textContent = "Symphonie";
    title.setAttribute('class', 'cursive');

    console.log('home finish');
}

export default loadHomepage;