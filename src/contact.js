//load contact page
import restaurant from "./restaurant.jpg";


export default function loadContactPage () {
    const content = document.getElementById("content");

    const h1 = document.createElement("h1");
    h1.innerText = 'Contact Us';
    content.appendChild(h1);

    const intro = document.createElement('p');
    intro.innerText = 'Have questions? Want to make a reservation? Or just want to chat about your favorite dish? We’re here to help!';
    content.appendChild(intro);

    const contactWrapper = document.createElement("div");
    contactWrapper.classList.add("contact-wrapper");
    content.appendChild(contactWrapper);

    const leftColumn = document.createElement("div");
    leftColumn.classList.add("left-column");
    contactWrapper.appendChild(leftColumn);


    const email = document.createElement('div');
    email.classList.add("contact-div");
    email.innerText="Email: fakerestaurant@fake.tr";
    leftColumn.appendChild(email);

    const phone = document.createElement('div');
    phone.classList.add("contact-div");
    phone.innerText="Phone: +1 123 456 789";
    leftColumn.appendChild(phone);

    const address = document.createElement('div');
    address.classList.add("contact-div");
    address.innerText="Address: Fake Batıkent Mah. Fake Çağnur Sk. NO: 2 Tepebaşı/FAKEŞEHİR ";
    leftColumn.appendChild(address);

    const rightColumn = document.createElement("div");
    rightColumn.classList.add("right-column");
    contactWrapper.appendChild(rightColumn);

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    rightColumn.appendChild(imgContainer);

    const restaurantJpg = document.createElement('img');
    restaurantJpg.classList.add("image-container");
    restaurantJpg.src = restaurant;
    imgContainer.appendChild(restaurantJpg);


}

