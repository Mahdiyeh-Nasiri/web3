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
    const SLIDER_container = document.querySelector('.slider-container');
        const IMAGE_SLIDER = document.querySelectorAll('.imageslide');
        const slideWidth1 = IMAGE_SLIDER[0].clientWidth;
        let index = IMAGE_SLIDER.length - 1;
        const rectangles = document.querySelectorAll('.rect');
let autoSlideInterval;

        function nextSlide1() {
            index = (index - 1 + IMAGE_SLIDER.length) % IMAGE_SLIDER.length;
            SLIDER_container.style.transition = 'transform 0.5s ease-in-out';
            SLIDER_container.style.transform = `translateX(${slideWidth1 * index}px)`;
            fillRectangle(index);
        }

        function prevSlide1() {
            index = (index + 1 + IMAGE_SLIDER.length) % IMAGE_SLIDER.length;
            SLIDER_container.style.transition = 'transform 0.5s ease-in-out';
            SLIDER_container.style.transform = `translateX(${slideWidth1 * index}px)`;
            fillRectangle(index);
        }

        function fillRectangle(index) {
            let reversedRectangles = Array.from(rectangles).reverse(); // Reverse the order of rectangles
            reversedRectangles.forEach((rectangle, i) => {
                if (i === index) {
                    rectangle.style.transition = '3s ease-out';
                    rectangle.style.backgroundPosition = 'right'; // Apply fill to the rightmost rectangle first
                } else {
                    rectangle.style.backgroundPosition = null;
                    rectangle.style.transition = null;
                }
            });
        }
            rectangles.forEach((rectangle, i) => {
                rectangle.addEventListener('click', () => {
                    index = rectangles.length - 1 - i; // Calculate the corresponding index of the image
                    SLIDER_container.style.transition = 'transform 0.5s ease-in-out';
                    SLIDER_container.style.transform = `translateX(${slideWidth1 * index}px)`;
                    fillRectangle(index);
                    // Display the corresponding image
                    IMAGE_SLIDER.style.transform = `translateX(${slideWidth1 * index}px)`;
                });
            });
        // Add event listeners to ICON_LEFT and ICON_RIGHT
        document.querySelector('.icon1').addEventListener('click', nextSlide1);
        document.querySelector('.icon2').addEventListener('click', prevSlide1);

// Automatically switch to the next slide every 3 seconds
        
                function startSlide1() {
                    autoSlideInterval = setInterval(nextSlide1, 3000);
                }

                function stopSlide1() {
                    clearInterval(autoSlideInterval);
                }

                startSlide1();

                // Add event listeners to start and stop slider on mouseenter and mouseleave
                SLIDER_container.addEventListener('mouseenter', stopSlide1);
                SLIDER_container.addEventListener('mouseleave', startSlide1);
//imagecontanier hover
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
            let counter = slides.length - 1; // Start from the last slide
            let key2;

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
                if (counter > 0) {
                    counter--;
                } else {
                    counter = slides.length - 1;
                }
                updateSlider();
            }

            document.querySelector('.icon-right').addEventListener("click", prevSlide);
            document.querySelector('.icon-left').addEventListener("click", nextSlide);

            function startSlide() {
                key2 = setInterval(prevSlide, 3000); // Adjust to call prevSlide to move towards the first slide
            }

            function stopSlide() {
                clearInterval(key2);
            }

            startSlide();

            slider.addEventListener('mouseenter', stopSlide);
            slider.addEventListener('mouseleave', startSlide);

            updateSlider();

//footer in 300-575
       const HEADFOOTER = document.querySelectorAll(".headfooter");
        const SUB = document.querySelectorAll(".subfooter");
        let current = 0;
        
            HEADFOOTER[0].addEventListener("click", function () {
                SUB[1].classList.remove("open");
                SUB[2].classList.remove("open");
                SUB[3].classList.remove("open");
                SUB[4].classList.remove("open");
                SUB[5].classList.remove("open");
                SUB[6].classList.remove("open");
                SUB[7].classList.remove("open");
                SUB[0].classList.toggle("open");
            });
                HEADFOOTER[1].addEventListener("click", function () {
            SUB[0].classList.remove("open");
            SUB[2].classList.remove("open");
            SUB[3].classList.remove("open");
            SUB[4].classList.remove("open");
            SUB[5].classList.remove("open");
            SUB[6].classList.remove("open");
            SUB[7].classList.remove("open");
            SUB[1].classList.toggle("open");
                });
                HEADFOOTER[2].addEventListener("click", function () {
            SUB[1].classList.remove("open");
            SUB[0].classList.remove("open");
            SUB[3].classList.remove("open");
            SUB[4].classList.remove("open");
            SUB[5].classList.remove("open");
            SUB[6].classList.remove("open");
            SUB[7].classList.remove("open");
            SUB[2].classList.toggle("open");
                });
                HEADFOOTER[3].addEventListener("click", function () {
            SUB[1].classList.remove("open");
            SUB[2].classList.remove("open");
            SUB[0].classList.remove("open");
            SUB[4].classList.remove("open");
            SUB[5].classList.remove("open");
            SUB[6].classList.remove("open");
            SUB[7].classList.remove("open");
            SUB[3].classList.toggle("open");
                });
                HEADFOOTER[4].addEventListener("click", function () {
            SUB[1].classList.remove("open");
            SUB[2].classList.remove("open");
            SUB[3].classList.remove("open");
            SUB[0].classList.remove("open");
            SUB[5].classList.remove("open");
            SUB[6].classList.remove("open");
            SUB[7].classList.remove("open");
            SUB[4].classList.toggle("open");
                });
                HEADFOOTER[5].addEventListener("click", function () {
            SUB[1].classList.remove("open");
            SUB[2].classList.remove("open");
            SUB[3].classList.remove("open");
            SUB[4].classList.remove("open");
            SUB[0].classList.remove("open");
            SUB[6].classList.remove("open");
            SUB[7].classList.remove("open");
            SUB[5].classList.toggle("open");
                });
                HEADFOOTER[6].addEventListener("click", function () {
            SUB[1].classList.remove("open");
            SUB[2].classList.remove("open");
            SUB[3].classList.remove("open");
            SUB[4].classList.remove("open");
            SUB[5].classList.remove("open");
            SUB[0].classList.remove("open");
            SUB[7].classList.remove("open");
            SUB[6].classList.toggle("open");
                });
                HEADFOOTER[7].addEventListener("click", function () {
            SUB[1].classList.remove("open");
            SUB[2].classList.remove("open");
            SUB[3].classList.remove("open");
            SUB[4].classList.remove("open");
            SUB[5].classList.remove("open");
            SUB[6].classList.remove("open");
            SUB[0].classList.remove("open");
            SUB[7].classList.toggle("open");
                });