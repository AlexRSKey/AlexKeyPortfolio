/* ----------------------------
   HOME PAGE (TITLE & CONTENTS)
   Animates the title banner text & used for all other homepage graphics
----------------------------- */
document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const content = document.getElementById("header-content");

  const scrollY = window.scrollY;
  const maxScroll = header.offsetHeight - 180; 
  // Amount before hitting the bottom of the banner

  const newTop = Math.min(20 + scrollY * 0.25, maxScroll * 0.2);

  content.style.top = newTop + "%";
});

/* ----------------------------
   MOBILE HAMBURGER MENU
----------------------------- */
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("mobile-menu");
const overlay = document.getElementById("menu-overlay");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

// Clicking outside closes menu
overlay.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
    overlay.classList.remove("active");
});

/* ----------------------------
   IMAGE CAROUSELS (PROJECT PAGES)
   This automatically finds ALL carousels on the site.
----------------------------- */

document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll("[data-carousel]");

    carousels.forEach(setupCarousel);
});

function setupCarousel(carousel) {
    const images = JSON.parse(carousel.getAttribute("data-images"));
    const captions = JSON.parse(carousel.getAttribute("data-captions"));

    let index = 0;

    const imgElement = carousel.querySelector(".carousel-img");
    const captionElement = carousel.querySelector(".carousel-caption");

    const leftBtn = carousel.querySelector(".left");
    const rightBtn = carousel.querySelector(".right");

    // Initialize
    updateCarousel();

    function updateCarousel() {
        imgElement.style.opacity = 0;

        setTimeout(() => {
            imgElement.src = images[index];
            captionElement.textContent = captions[index];
            imgElement.style.opacity = 1;
        }, 200);
    }

    leftBtn.addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    });

    rightBtn.addEventListener("click", () => {
        index = (index + 1) % images.length;
        updateCarousel();
    });
}
