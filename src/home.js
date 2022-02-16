const home = () => {
    console.log('home works')
    const descriptionContainer = document.createElement('div');
    const description = document.createElement('p');
    description.setAttribute('id','description')
    description.textContent = 'Traditional Polish dishes prepared with love and passion using only local & natual ingredience. The ingerdients are local and natural, and the dishes prepared with love and tradition. Traditional dishes, just like our grandmas used to make. Traditional Polish dishes prepared with love and passion using only local & natual ingredience. Be sure to try our soup of the day.';
    description.setAttribute('id', 'description')


    document.getElementById('main').appendChild(descriptionContainer);
    descriptionContainer.appendChild(description);
    console.log('kpa')
}

export default home;

