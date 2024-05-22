// first slider
            const BUTTONS = document.querySelectorAll("button");
            const PICTURE = document.querySelector(".slidercontainer>img");
            const PROGRESS = document.querySelector(".image_time>.rect");
            const PARAGRAPH = document.querySelector("p");
            const PICS = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg"];
            
            window.addEventListener("load", slidertime);
            
            function slidertime() {
                position_right=-100%;
                PICTURE.style.position_right= `${position_right}`;
                if (position_right>=200%) {
                    clearInterval(key);
                }

                        }

                let index = 0;
                let position_right = 100;
                let key;

                function fade_out(destination) {
                    opacity_value -= 4;
                    IMAGE.style.opacity = `${opacity_value}%`;
                    if (opacity_value <= 0) {
                        clearInterval(key);
                        if (destination == "left") {
                            index--;
                            if (index == -1) {
                                index = PICS.length - 1;
                            }
                        }
                        else if (destination == "right") {
                            index++;
                            if (index == PICS.length) {
                                index = 0;
                            }
                        }
                        IMAGE.setAttribute("src", PICS[index]);
                        key = setInterval(fade_in, 1);
                    }
                }

                function fade_in() {
                    opacity_value += 4;
                    IMAGE.style.opacity = `${opacity_value}%`;
                    if (opacity_value >= 100) {
                        clearInterval(key);
                    }
                }

                ICONS[0].addEventListener("click", () => key = setInterval(() => fade_out("left"), 1));
                ICONS[1].addEventListener("click", () => key = setInterval(() => fade_out("right"), 1));

            BUTTONS[2].addEventListener("click", function () {
                let w = 0;
                let key = setInterval(function () {
                    w++;
                    PROGRESS.style.width = `${w}%`;
                    PARAGRAPH.textContent = `${w}%`
                    if (w >= 100) {
                        clearInterval(key);
                    }
                }, 30)
            })


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
