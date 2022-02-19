const loadHomepage = () => {
    let subtitle = document.createElement('p');
    document.getElementById('main').appendChild(subtitle);
    subtitle.textContent = "RESTAURANT";
    subtitle.setAttribute('class', 'subtitle');

    let title = document.createElement('p');
    document.getElementById('main').prepend(title);
    title.textContent = "Symphonie";
    title.classList.add('cursive');
    title.classList.add('title');
}

export default loadHomepage;