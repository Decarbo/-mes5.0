const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-list a');

// Toggle mobile menu
mobileMenu.addEventListener('click', () => {
	navList.classList.toggle('active');
	mobileMenu.classList.toggle('open');
	document.body.classList.toggle('menu-open');
});

// Close menu when a link is clicked
navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		navList.classList.remove('active');
		mobileMenu.classList.remove('open');
		document.body.classList.remove('menu-open');
	});
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
	if (!navList.contains(e.target) && !mobileMenu.contains(e.target) && navList.classList.contains('active')) {
		navList.classList.remove('active');
		mobileMenu.classList.remove('open');
		document.body.classList.remove('menu-open');
	}
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
window.addEventListener('resize', () => {
	if (window.innerWidth > 768 && navList.classList.contains('active')) {
		navList.classList.remove('active');
		mobileMenu.classList.remove('open');
		document.body.classList.remove('menu-open');
	}
});

const loadingElement = document.querySelector('[data-loading]');

window.addEventListener('load', function () {
	loadingElement.classList.add('loaded');
	document.body.classList.remove('active');
});

// Typing effect
const text = 'Welcomes Batch 2K24';
const typingText = document.querySelector('.typing-text');
let i = 0;
let isDeleting = false;
let speed = 100;

function typeWriter() {
	if (!isDeleting && i < text.length) {
		// Typing
		typingText.textContent += text.charAt(i);
		i++;
		speed = 100;
	} else if (isDeleting && i > 0) {
		// Deleting
		typingText.textContent = text.substring(0, i - 1);
		i--;
		speed = 50;
	} else {
		// Switch between typing and deleting
		isDeleting = !isDeleting;
		speed = isDeleting ? 1000 : 500; // Pause at the end of each phase
	}

	setTimeout(typeWriter, speed);
}

// Start typing effect when the page loads
window.addEventListener('load', typeWriter);

// Initialize Yantrika Swiper
const yantrikaSwiper = new Swiper('.yantrikaSwiper', {
	slidesPerView: 1,
	centeredSlides: true,
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 3,
		},
	},
});
