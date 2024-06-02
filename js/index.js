/*navigation
        const NAVIGATION = document.querySelector(".navigation");
        const ITEM_PRODUCT1 = document.querySelectorAll("li")[0];
        /*const ITEM_PRODUCT2 = document.querySelectorAll("li")[2];
        const MENU = document.querySelector(".menu-list");
        //const SUBMENU = document.querySelector(".submenu");
        const SUBMENU_PRODUCT = document.querySelector(".products");
        let screen_width = document.documentElement.clientWidth;
        const ICON_NAV1 = document.querySelector(".icon-nav1");
        const ICON_NAV2 = document.querySelector(".icon-nav2");
        
        let key;

window.addEventListener("resize", function () {
    screen_width = this.document.documentElement.clientWidth;
    if (screen_width >= 992) {
        SUBMENU_PRODUCT.classList.add("hidden");
        ITEM_PRODUCT1.addEventListener("mouseover", function () {
            clearTimeout(key);
            SUBMENU_PRODUCT.classList.remove("hidden");
            setTimeout(function () {
                SUBMENU_PRODUCT.classList.add("show-submenu")
            }, 1);
        });
        ITEM_PRODUCT1.addEventListener("mouseout", function () {
            SUBMENU_PRODUCT.classList.remove("show-submenu");
            key = setTimeout(function () {
                SUBMENU_PRODUCT.classList.add("hidden");
            }, 401);
        });
        SUBMENU_PRODUCT.addEventListener("mouseover", function () {
            clearTimeout(key);
            SUBMENU_PRODUCT.classList.remove("hidden");
            setTimeout(function () {
                SUBMENU_PRODUCT.classList.add("show_submenu");
            }, 1);
        });
        SUBMENU_PRODUCT.addEventListener("mouseout", function () {
            SUBMENU_PRODUCT.classList.remove("show-submenu");
            key = setTimeout(function () {
                SUBMENU_PRODUCT.classList.add("hidden");
            }, 401);
        });
    }
    else {
        MENU.addEventListener("click", function () {
            NAVIGATION.classList.toggle("show-navigation");
        });
        ITEM_PRODUCT1.addEventListener("click", function () {
            SUBMENU_PRODUCT.classList.add("show-submenu");
        });
        ICON_NAV2.addEventListener("click", function () {
            SUBMENU_PRODUCT.classList.remove("show-submenu");
        });
    }
});
window.addEventListener("load", function () {
    screen_width = document.documentElement.clientWidth;
    if (screen_width >= 992) {
        SUBMENU_PRODUCT.classList.add("hidden");
        ITEM_PRODUCT1.addEventListener("mouseover", function () {
            clearTimeout(key);
            SUBMENU_PRODUCT.classList.remove("hidden");
            setTimeout(function () {
                SUBMENU_PRODUCT.classList.add("show-submenu")
            }, 1);
        });
        ITEM_PRODUCT1.addEventListener("mouseout", function () {
            SUBMENU_PRODUCT.classList.remove("show-submenu");
            key = setTimeout(function () {
                SUBMENU_PRODUCT.classList.add("hidden");
            }, 401);
        });
        SUBMENU_PRODUCT.addEventListener("mouseover", function () {
            clearTimeout(key);
            SUBMENU_PRODUCT.classList.remove("hidden");
            setTimeout(function () {
                SUBMENU_PRODUCT.classList.add("show_submenu");
            }, 1);
        });
        SUBMENU_PRODUCT.addEventListener("mouseout", function () {
            SUBMENU_PRODUCT.classList.remove("show-submenu");
            key = setTimeout(function () {
                SUBMENU_PRODUCT.classList.add("hidden");
            }, 401);
        });
    }
    else {
        MENU.addEventListener("click", function () {
            NAVIGATION.classList.toggle("show-navigation");
        });zz
        ITEM_PRODUCT1.addEventListener("click", function () {
            SUBMENU_PRODUCT.classList.add("show-submenu");
        });
        ICON_NAV2.addEventListener("click", function () {
            SUBMENU_PRODUCT.classList.remove("show-submenu");
        });
    }
});


        /*MENU.addEventListener("click", function () {
            NAVIGATION.classList.toggle("open-navigation");
        });

        if (screen_width >= 992) {

            SUBMENU.addEventListener("mouseover", function () {
                PRODUCTS.classList.add("show-submenu");
            });

            PRODUCTS.addEventListener("mouseover", function () {
                PRODUCTS.classList.add("show-submenu");
            });

            SUBMENU.addEventListener("mouseleave", function () {
                PRODUCTS.classList.remove("show-submenu");
            });

            PRODUCTS.addEventListener("mouseleave", function () {
                PRODUCTS.classList.remove("show-submenu");
            });

            window.addEventListener("scroll", function () {
                if (this.document.documentElement.scrollTop > 200) {
                    NAVIGATION.classList.add("new-navigation");
                }
                else {
                    NAVIGATION.classList.remove("new-navigation");
                }
            })

        }
        else {
            ICON_NAV1.addEventListener("click", function () {
                PRODUCTS.classList.add("show-submenu");
            });

            ICON_NAV2.addEventListener("click", function () {
                PRODUCTS.classList.remove("show-submenu");
            });
        }

*/

 //first slider
            /*const BUTTONS = document.querySelectorAll("button");
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
            
            */
// imagecontanier hover
            const images = document.querySelectorAll('.pic');

            images.forEach((image, index) => {
            image.addEventListener('mouseover', () => {
                images.forEach((img, i) => {
                if (i !== index) {
                    img.style.opacity = '0.8';
                } else {
                    img.style.opacity = '1';
                    }
                });
                });
                    image.addEventListener('mouseout', () => {
                    images.forEach((img, i) => {
                if (i !== index) {
                    img.style.opacity = '1';
                }
                });
                    });
            });

//slider2
        const slider = document.querySelector('.slider2');
        const slides = document.querySelectorAll('.pic3'); 
        let ICON_LEFT = document.querySelectorAll(".icon1");
        let ICON_RIGHT = document.querySelectorAll(".icon2");
        const slideWidth = slides[0].clientWidth;
        let counter = 0;
        
        function updateSlider() {
        let slideWidth = slides[0].clientWidth;
        slider.style.transform = `translateX(${slideWidth * counter}px)`;
        }   
        
        function nextSlide() {
        if (counter < slides.length - 1) {
            counter++;
        } else {
            counter = 0;
        }
        updateSlider();
        }

        function prevSlide() {
            counter--;
            if (counter < 0) {
                counter = slides.length - 1;
            }
                let slideWidth = slides[0].clientWidth;
                slider.style.transform = `translateX(${-slideWidth * counter}px)`;
        }                          
        
        ICON_LEFT[1].addEventListener("click", prevSlide);
        ICON_RIGHT[1].addEventListener("click", nextSlide);

        // Automatic sliding
        function startSlide() {
            interval = setInterval(slider, 1000);
        }

        function stopSlide() {
            clearInterval(interval);
        }

        // Start automatic sliding
        startSlide();

        // Pause automatic sliding on mouseenter, resume on mouseleave
        slider.addEventListener('mouseenter', stopSlide);
        slider.addEventListener('mouseleave', startSlide);
        
        setInterval(nextSlide, 1000);
        updateSlider();

//footer in 300-575
        const HEADFOOTER = document.querySelectorAll(".headfooter");
        const SUB = document.querySelectorAll(".subfooter");

        HEADFOOTER[0].addEventListener("click", function () {
            SUB[1].classList.remove("open");
            SUB[2].classList.remove("open");
            SUB[0].classList.toggle("open");
        });

        HEADFOOTER[1].addEventListener("click", function () {
            SUB[0].classList.remove("open");
            SUB[2].classList.remove("open");
            SUB[1].classList.toggle("open");
        });

        HEADFOOTER[2].addEventListener("click", function () {
            SUB[0].classList.remove("open");
            SUB[1].classList.remove("open");
            SUB[2].classList.toggle("open");
        });