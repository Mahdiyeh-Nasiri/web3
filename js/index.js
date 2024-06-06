
    //navigation
        const NAVIGATION = document.querySelector(".menu");
        const ITEM_PRODUCT1 = document.querySelectorAll("li")[5];
        const ITEM_PRODUCT2 = document.querySelectorAll("li")[7];
        const MENU = document.querySelector(".menu-list");
        const SUBMENU_PRODUCT = document.querySelector(".products");
        const SUBMENU_SUPPORT = document.querySelector(".support");
        let screen_width = document.documentElement.clientWidth;
        const ICON_NAV1 = document.querySelector(".icon-nav1");
        const RETURN = document.querySelector(".return");
        const RETURN_SUPPORT = document.querySelector(".return-support");
        const SUBLIST_SUPPORT = document.querySelectorAll(".sublist-support");
        const MODAL_CONTAINER = document.querySelector(".modal-container"); 
        const ICON_MODAL = document.querySelector(".icon-modal");    
        let key;
        let key_nav2;

    window.addEventListener("resize", function () {
    screen_width = this.document.documentElement.clientWidth;
    if (screen_width >= 576) {
        SUBMENU_PRODUCT.classList.add("hidden");
        SUBMENU_SUPPORT.classList.add("hidden");

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
            }, 40);
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
            }, 40);
        });
            ITEM_PRODUCT2.addEventListener("mouseover", function () {
            clearTimeout(key_nav2);
            SUBMENU_SUPPORT.classList.remove("hidden");
            setTimeout(function () {
                SUBMENU_SUPPORT.classList.add("show-submenu")
            }, 1);
        });
        ITEM_PRODUCT2.addEventListener("mouseout", function () {
            SUBMENU_SUPPORT.classList.remove("show-submenu");
            key_nav2 = setTimeout(function () {
                SUBMENU_SUPPORT.classList.add("hidden");
            }, 40);
        });
        SUBMENU_SUPPORT.addEventListener("mouseover", function () {
            clearTimeout(key_nav2);
            SUBMENU_SUPPORT.classList.remove("hidden");
            setTimeout(function () {
                SUBMENU_SUPPORT.classList.add("show_submenu");
            }, 1);
        });
        SUBMENU_SUPPORT.addEventListener("mouseout", function () {
            SUBMENU_SUPPORT.classList.remove("show-submenu");
            key_nav2 = setTimeout(function () {
                SUBMENU_SUPPORT.classList.add("hidden");
            }, 40);
        });
    }
    else {
        NAVIGATION.classList.add("hidden");
        SUBMENU_PRODUCT.classList.add("hidden");
        SUBMENU_SUPPORT.classList.add("hidden");

        MENU.addEventListener("click", function () {
            MODAL_CONTAINER.classList.remove("hidden");
            setTimeout(function () { MODAL_CONTAINER.classList.add("opacity-100"); }, 1);
        });

        MENU.addEventListener("click", function () {
            NAVIGATION.classList.toggle("hidden");
            NAVIGATION.classList.toggle("show-submenu");        
        });
        ITEM_PRODUCT1.addEventListener("click", function () {
           SUBMENU_PRODUCT.classList.toggle("hidden");
            SUBMENU_PRODUCT.classList.add("show-submenu");
        });
        RETURN.addEventListener("click", function () {
            SUBMENU_PRODUCT.classList.remove("show-submenu");
           SUBMENU_PRODUCT.classList.toggle("hidden");
        });
        ITEM_PRODUCT2.addEventListener("click", function () {
           SUBMENU_SUPPORT.classList.toggle("hidden");
            SUBMENU_SUPPORT.classList.add("show-submenu");
        });
        RETURN_SUPPORT.addEventListener("click", function () {
            SUBMENU_SUPPORT.classList.remove("show-submenu");
           SUBMENU_SUPPORT.classList.toggle("hidden");
        });
        ICON_MODAL.addEventListener("click", function () {
            MODAL_CONTAINER.classList.add("hidden");
            NAVIGATION.classList.add("hidden");
            SUBMENU_PRODUCT.classList.add("hidden");
            SUBMENU_SUPPORT.classList.add("hidden");
            setTimeout(function () { MODAL_CONTAINER.classList.remove("opacity-100"); }, 1);
        });

    }
});
window.addEventListener("load", function () {
    screen_width = document.documentElement.clientWidth;
    if (screen_width >= 576) {
        SUBMENU_PRODUCT.classList.add("hidden");
        SUBMENU_SUPPORT.classList.add("hidden");

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
            }, 40);
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
            }, 40);
        });
        ITEM_PRODUCT2.addEventListener("mouseover", function () {
            clearTimeout(key_nav2);
            SUBMENU_SUPPORT.classList.remove("hidden");
            setTimeout(function () {
                SUBMENU_SUPPORT.classList.add("show-submenu")
            }, 1);
        });
        ITEM_PRODUCT2.addEventListener("mouseout", function () {
            SUBMENU_SUPPORT.classList.remove("show-submenu");
            key_nav2 = setTimeout(function () {
                SUBMENU_SUPPORT.classList.add("hidden");
            }, 40);
        });
        SUBMENU_SUPPORT.addEventListener("mouseover", function () {
            clearTimeout(key_nav2);
            SUBMENU_SUPPORT.classList.remove("hidden");
            setTimeout(function () {
                SUBMENU_SUPPORT.classList.add("show_submenu");
            }, 1);
        });
        SUBMENU_SUPPORT.addEventListener("mouseout", function () {
            SUBMENU_SUPPORT.classList.remove("show-submenu");
            key_nav2 = setTimeout(function () {
                SUBMENU_SUPPORT.classList.add("hidden");
            }, 40);
        });
    }
    else {
        NAVIGATION.classList.add("hidden");
        SUBMENU_PRODUCT.classList.add("hidden");
        SUBMENU_SUPPORT.classList.add("hidden");
        
        MENU.addEventListener("click", function () {
            MODAL_CONTAINER.classList.remove("hidden");
            setTimeout(function () { MODAL_CONTAINER.classList.add("opacity-100"); }, 1);
        });
        MENU.addEventListener("click", function () {
            NAVIGATION.classList.toggle("hidden");
            NAVIGATION.classList.toggle("show-submenu");
        });
        ITEM_PRODUCT1.addEventListener("click", function () {
            SUBMENU_PRODUCT.classList.toggle("hidden");
            SUBMENU_PRODUCT.classList.add("show-submenu");
        });
        RETURN.addEventListener("click", function () {
            SUBMENU_PRODUCT.classList.remove("show-submenu");
           SUBMENU_PRODUCT.classList.toggle("hidden");
        });
        ITEM_PRODUCT2.addEventListener("click", function () {
           SUBMENU_SUPPORT.classList.toggle("hidden");
            SUBMENU_SUPPORT.classList.add("show-submenu");
        });
        RETURN_SUPPORT.addEventListener("click", function () {
            SUBMENU_SUPPORT.classList.remove("show-submenu");
           SUBMENU_SUPPORT.classList.toggle("hidden");
        })

    ICON_MODAL.addEventListener("click", function () {
    MODAL_CONTAINER.classList.add("hidden");
    NAVIGATION.classList.add("hidden");
    SUBMENU_PRODUCT.classList.add("hidden");
    SUBMENU_SUPPORT.classList.add("hidden");
    setTimeout(function () { MODAL_CONTAINER.classList.remove("opacity-100"); }, 1);
});

    };
});
//first slider
    const SLIDER_container = document.querySelector('.slider-container');
        const IMAGE_SLIDER = document.querySelectorAll('.imageslide');
        const slideWidth1 = IMAGE_SLIDER[0].clientWidth;
        let index = IMAGE_SLIDER.length - 1;
        const rectangles = document.querySelectorAll('.rect');
        let autoSlideInterval;
window.addEventListener("load", function () {
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
        let reversedRectangles = Array.from(rectangles).reverse();
        reversedRectangles.forEach((rectangle, i) => {
            if (i === index) {
                rectangle.style.transition = '3s ease-out';
                rectangle.style.backgroundPosition = 'right';
            } else {
                rectangle.style.backgroundPosition = null;
                rectangle.style.transition = null;
            }
        });
    }
    rectangles.forEach((rectangle, i) => {
        rectangle.addEventListener('click', () => {
            index = rectangles.length - 1 - i;
            SLIDER_container.style.transition = 'transform 0.5s ease-in-out';
            SLIDER_container.style.transform = `translateX(${slideWidth1 * index}px)`;
            fillRectangle(index);
            IMAGE_SLIDER.style.transform = `translateX(${slideWidth1 * index}px)`;
        });
    });
    
    document.querySelector('.icon1').addEventListener('click', nextSlide1);
    document.querySelector('.icon2').addEventListener('click', prevSlide1);

        
    /*function startSlide1() {
        autoSlideInterval = setInterval(nextSlide1, 3000);
    }

    function stopSlide1() {
        clearInterval(autoSlideInterval);
    }

    startSlide1();

    SLIDER_container.addEventListener('mouseenter', stopSlide1);
    SLIDER_container.addEventListener('mouseleave', startSlide1);*/
    setInterval(nextSlide1, 3000);
});
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
window.addEventListener("load", function () {
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
});

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
                