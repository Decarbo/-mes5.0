const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-list a");

// Toggle mobile menu
mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
  mobileMenu.classList.toggle("open");
  document.body.classList.toggle("menu-open");
});

// Close menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navList.classList.remove("active");
    mobileMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navList.contains(e.target) && !mobileMenu.contains(e.target) && navList.classList.contains("active")) {
    navList.classList.remove("active");
    mobileMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
  }
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

  body.menu-open {
    overflow: hidden;
  }
`;
document.head.appendChild(style);

// Handle window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && navList.classList.contains("active")) {
    navList.classList.remove("active");
    mobileMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
  }
});

const loadingElement = document.querySelector("[data-loading]");

window.addEventListener("load", function () {
  loadingElement.classList.add("loaded");
  document.body.classList.remove("active");
});
