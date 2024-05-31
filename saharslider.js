const progressBarContainer = document.querySelector(".progress-bars");
const PICS = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg"];
let currentIndex = 0;
let pic;
const slider = document.querySelector(".slider-container");

// Create slides
PICS.forEach((pic) => {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  slide.innerHTML = `<img src="${pic}" alt="Image">`;
  slider.appendChild(slide);
});

const slides = document.querySelectorAll(".slide");

// Create progress bars
slides.forEach((slide, index) => {
  const progressBar = document.createElement('div');
  progressBar.classList.add("progress-bar");
  progressBarContainer.appendChild(progressBar);
});

const progressBars = document.querySelectorAll('.progress-bar');

/* Create progress bars percentages
progressBars.forEach((progressBar, index) => {
  const progresspercent = document.createElement('div');
  progresspercent.classList.add('progresspp');
  progressBars.appendChild(progresspercent);
});

const percentages = document.querySelectorAll('.progresspp');

/*Create progress bars percentages
percentages.forEach((progresspercent, index) => {
  const percentage = document.createElement('div');
  percentage.classList.add('percentage');
  percentage.innerText = `${(index + 1) * 20}%`;
  slides[index].appendChild(percentage);
});

//Update progress bar
function updateProgressBar() {
  progressBars.forEach((progressBar, index) => {
    if (index === currentIndex) {
        updateProgresspercent();
    } else {
      progressBar.classList.remove('active');
    }
  });
}

function updateProgresspercent() {
    let w = 0;
    let key = setInterval(function () {
        w++;
        PROGRESS.style.width = `${w}%`;
        if (w >= 100) {
            clearInterval(key);
        }
    }, 3000);
}

function updateProgressBar() {
  progressBars.forEach((progressBar, index) => {
    if (index === currentIndex) {
      progressBar.style.width = '100%';
    } else {
      progressBar.style.width = '0';
    }
  });
}
*/
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
  let slideWidth = slides[0].clientWidth;
  slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}



// Automatically move to next slide every 3 seconds
setInterval(nextSlide, 3000);

// Initial setup
updateSlider();
