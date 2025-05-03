//load menu page
import adanaKebab from "./adana.jpg";
import lahmacun from "./lahmacun.jpg";
import kofte from "./kofte.jpg";
import kebabPita from "./kebab-pita.jpg";
import kebabPlate from "./kebab-plate.jpg";
import baklava from "./baklava.jpg";
import kadayif from "./kadayif.jpg";




export default function loadMenuPage () {
    const menuItems = [
        {
            name: "Adana Kebab",
            price: "$10",
            image: adanaKebab
        },
        {
            name: "Lahmacun",
            price: "$5",
            image: lahmacun
        },
        {
            name: "Kofte Sandwich",
            price: "$7",
            image: kofte
        },
        {
            name: "Doner Kebab",
            price: "$6",
            image: kebabPita
        },
        {
            name: "Doner Kebab Plate",
            price: "$8",
            image: kebabPlate
        },
        {
            name: "baklava",
            price: "$6",
            image: baklava
        },
        {
            name: "Kadayif",
            price: "$7",
            image: kadayif
        },
    ]

    const content = document.getElementById("content");

    const h1 = document.createElement("h1");
    h1.innerText = 'Menu';
    content.appendChild(h1);

    const menuWrapper = document.createElement("div");
    menuWrapper.classList.add("menu-wrapper");
    content.appendChild(menuWrapper);

    menuItems.forEach((item)=>{
        const menuCard = document.createElement("div");
        menuCard.classList.add("menu-card");

        const itemImage = document.createElement("img");
        itemImage.src = item.image;
        menuCard.appendChild(itemImage);

        const menuName = document.createElement("h3");
        menuName.innerText = item.name;
        menuCard.appendChild(menuName);

        const menuPrice = document.createElement('h4');
        menuPrice.innerText = item.price;
        menuCard.appendChild(menuPrice);

        menuWrapper.appendChild(menuCard);
    })

}

