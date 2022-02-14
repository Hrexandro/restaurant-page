const home = () => {
    console.log('home works')
    const descriptionContainer = document.createElement('div');
    const description = document.createElement('p');
    description.textContent = 'Traditional Polish dishes prepared with love and passion using only local & natual ingredience.Traditional Polish dishes prepared with love and passion using only local & natual ingredience.Traditional Polish dishes prepared with love and passion using only local & natual ingredience.Traditional Polish dishes prepared with love and passion using only local & natual ingredience.Traditional Polish dishes prepared with love and passion using only local & natual ingredience.';



    document.body.appendChild(descriptionContainer);
    descriptionContainer.appendChild(description);
    console.log('kpa')
}

export default home;

