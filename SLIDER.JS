const PICS = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg"];

const slider = document.querySelector('.slider');
const progressBarContainer = document.querySelector('.progress-bars');

let currentIndex = 0;

// Create slides
PICS.forEach((pic) => {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  slide.innerHTML = `<img src="${pic}" alt="Image">`;
  slider.appendChild(slide);
});

const slides = document.querySelectorAll('.slide');

// Create progress bars
slides.forEach((slide, index) => {
  const progressBar = document.createElement('div');
  progressBar.classList.add('progress-bar');
  progressBarContainer.appendChild(progressBar);
});

const progressBars = document.querySelectorAll('.progress-bar');

// Update progress bar
function updateProgressBar() {
  progressBars.forEach((progressBar, index) => {
    if (index === currentIndex) {
      progressBar.classList.add('active');
    } else {
      progressBar.classList.remove('active');
    }
  });
}

// Move to next slide
function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
}

// Update slider position
function updateSlider() {
  const slideWidth = slides[0].clientWidth;
  slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  updateProgressBar();
}

// Automatically move to next slide every 3 seconds
setInterval(nextSlide, 3000);

// Initial setup
updateSlider();
