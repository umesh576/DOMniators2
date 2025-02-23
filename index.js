let index = 0;
const slides = document.querySelector(".slide-track");
const totalSlides = document.querySelectorAll(".slide-track img").length;

function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}vw)`;
}

function nextSlide() {
  index = (index + 1) % totalSlides; // Loop back to first image
  updateSlide();
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides; // Loop back to last image
  updateSlide();
}
