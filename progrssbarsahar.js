const progressBarContainer = document.querySelector('.progress-bar');
let currentIndex = 0;

const slides = document.querySelectorAll(".slide");

// Create progress bars
slides.forEach((slide, index) => {
  const progressBar = document.createElement('div');
  progressBar.classList.add('progress-bar');
  progressBarContainer.appendChild(progressBar);
});
// Create progress bars percentages
progressBars.forEach((progressBar, index) => {
  const progresspercent = document.createElement('div');
  progresspercent.classList.add('progresspp');
 progressBars.appendChild(progresspercent);
});

// Update progress bar
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