const home = () => {
    console.log('home works')
    // const descriptionContainer = document.createElement('div');
    // const description = document.createElement('p');
    // description.setAttribute('id','description')
    // description.textContent = 'Traditional Polish dishes prepared with love and passion using only local & natual ingredience. The ingerdients are local and natural, and the dishes prepared with love and tradition. Traditional dishes, just like our grandmas used to make. Traditional Polish dishes prepared with love and passion using only local & natual ingredience. Be sure to try our soup of the day.';
    // description.setAttribute('id', 'description')


    // document.getElementById('main').appendChild(descriptionContainer);
    // descriptionContainer.appendChild(description);



let subtitle = document.createElement('p');
document.getElementById('main').appendChild(subtitle);
subtitle.textContent = "Restaurant"

let title = document.createElement('p');
document.getElementById('main').prepend(title);
title.textContent = "Symphonie"
title.setAttribute('class','cursive')



    console.log('home finish')
}

export default home;

