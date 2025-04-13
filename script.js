const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
  mobileMenu.classList.toggle("open");
});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// CSS for cross icon
const style = document.createElement('style');
style.innerHTML = `
  #mobile-menu.open .bar:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  #mobile-menu.open .bar:nth-child(2) {
    opacity: 0;
  }
  #mobile-menu.open .bar:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
`;
document.head.appendChild(style);
