        const SLIDER_container = document.querySelector('.slider-container');
        const IMAGE_SLIDER = document.querySelectorAll('.imageslide'); 
        let ICON_LEFT = document.querySelectorAll(".icon1");
        let ICON_RIGHT = document.querySelectorAll(".icon2");
        const slideWidth1 = IMAGE_SLIDER[0].clientWidth;
        let index = 0;
        let key1;
        
        function updateSLIDER_container() {
        let slideWidth1 = IMAGE_SLIDER[0].clientWidth;
        SLIDER_container.style.transform = `translateX(${-slideWidth1 * index}px)`;
        }   
        
        function nextSlide1() {
        if (index < IMAGE_SLIDER.length - 1) {
            index++;
        } else {
            index = 0;
        }
        updateSLIDER_container();
        }

        const rectangles = document.querySelectorAll('.rect');
        let currentSlide = 0;
       function showSlide(index) {
            IMAGE_SLIDER.forEach((slide) => {
                slide.style.display = 'none';
            });
            IMAGE_SLIDER[index].style.display = 'block';
}
        
        function fillRectangle(index) {
            rectangles.forEach((rectangle) => {
                rectangle.style.backgroundPosition = null;
                rectangle.style.transition = null;
            });
            rectangles[index].style.transition = ' 3s ease-out';
            rectangles[index].style.backgroundPosition = 'left';
        }
    
        showSlide(currentSlide);
        fillRectangle(currentSlide);
    
        // Automatically switch to the next slide every 3 seconds
        setInterval(nextSlide, 3000);
        function nextSlide() {
            currentSlide = (currentSlide + 1) % IMAGE_SLIDER.length;
            showSlide(currentSlide);
            fillRectangle(currentSlide);
        }

        
     function nextSlide1() {
        if (index < IMAGE_SLIDER.length-1) {
            index++;
        } else {
            index = 0;
        }
        updateSLIDER_container();
        }

        function prevSlide1() {
            index--;
            if (index < 0) {
                index = IMAGE_SLIDER.length-1;
            }
                let slideWidth1 = IMAGE_SLIDER[0].clientWidth;
                SLIDER_container.style.transform = `translateX(${-slideWidth1 * index}px)`;
        }                          
        
        ICON_LEFT[0].addEventListener("click", prevSlide1);
        ICON_RIGHT[0].addEventListener("click", nextSlide1);

        // Automatic sliding
        function startSlide1() {
            key1 = setInterval(updateSLIDER_container, 1000);
        }

        function stopSlide1() {
            clearInterval(key1);
        }

    