document.addEventListener("DOMContentLoaded", function() {
    /* --------- SLIDESHOW LOGIK --------- */
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    /* Funktion til at skifte slide */
    window.changeSlide = function(direction) {
        slides[currentSlideIndex].classList.remove("on");
        dots[currentSlideIndex].classList.remove("on");

        currentSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length;

        slides[currentSlideIndex].classList.add("on");
        dots[currentSlideIndex].classList.add("on");
    };

    /* Funktion til at gå til specifikt slide */
    window.currentSlide = function(n) {
        slides[currentSlideIndex].classList.remove("on");
        dots[currentSlideIndex].classList.remove("on");

        currentSlideIndex = n;

        slides[currentSlideIndex].classList.add("on");
        dots[currentSlideIndex].classList.add("on");
    };

    /* --------- SWIPE FUNKTIONALITET (MOBIL) --------- */
    let startX = 0;

    document.querySelector(".slideshow-container").addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    document.querySelector(".slideshow-container").addEventListener("touchend", (e) => {
        let endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) {
            window.changeSlide(1);
        } else if (endX - startX > 50) {
            window.changeSlide(-1);
        }
    });
});
