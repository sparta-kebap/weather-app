//load homepage
import breakfast from "./breakfast.jpg";
import breakfast2 from "./breakfast2.jpg";
import tea from "./tea.jpg";
export let slideTimeoutId; // Variable to store the setTimeout ID
export let slideIndex = 0; // Declare slideIndex globally

export function loadHomePage () {
    const content = document.getElementById("content");

    const h1 = document.createElement("h1");
    h1.innerText = 'Fake Restaurant';
    content.appendChild(h1);

    const intro = document.createElement('p');
    intro.innerText = 'Welcome to our Fake Restaurant. Everything is fake. Enjoy.';
    content.appendChild(intro);

    const slideshowDiv = document.createElement('div');
    slideshowDiv.id = "slide-show-div";
    content.appendChild(slideshowDiv);



    const breakfastJpg = document.createElement('img');
    breakfastJpg.src = breakfast;
    breakfastJpg.classList.add("mySlides", "fade");
    slideshowDiv.appendChild(breakfastJpg);

    const breakfast2Jpg = document.createElement('img');
    breakfast2Jpg.src = breakfast2;
    breakfast2Jpg.classList.add("mySlides", "fade");
    slideshowDiv.appendChild(breakfast2Jpg);

    const teaJpg = document.createElement('img');
    teaJpg.src = tea;
    teaJpg.classList.add("mySlides", "fade");
    slideshowDiv.appendChild(teaJpg);

   

    function showSlides() {
        const slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        slideTimeoutId = setTimeout(showSlides, 4000); // Store the timeout ID
    }

    showSlides(); // Start the slideshow
}

export function clearPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    content.className = "";

    if (slideTimeoutId) {
        clearTimeout(slideTimeoutId); // Stop the slideshow
        slideTimeoutId = null; // Reset the timeout ID
    }
}