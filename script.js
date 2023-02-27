
// Hamburger Physics
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

hamburgerMenu.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

// Slideshow Timer
let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow-container img');
const interval = setInterval(autoSlide, 3000);

function autoSlide() {
  slides[slideIndex].classList.remove('active');
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}

