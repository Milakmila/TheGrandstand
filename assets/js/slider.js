document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slidesCount = document.querySelectorAll('.slide').length;
    const dotsContainer = document.querySelector('.navigation-dots');
    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');

    let currentIndex = 0;

    // Create navigation dots
    for (let i = 0; i < slidesCount; i++) {
        const dot = document.createElement('div');
        dot.addEventListener('click', () => {
            goToSlide(i);
        });
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.navigation-dots div');
    dots[0].classList.add('active');

    function goToSlide(index) {
        slides.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        currentIndex = index;
    }

    // Navigation with arrows
    leftArrow.addEventListener('click', () => {
        const prevIndex = (currentIndex - 1 + slidesCount) % slidesCount;
        goToSlide(prevIndex);
    });

    rightArrow.addEventListener('click', () => {
        const nextIndex = (currentIndex + 1) % slidesCount;
        goToSlide(nextIndex);
    });

    // Auto-slide functionality
    setInterval(() => {
        const nextIndex = (currentIndex + 1) % slidesCount;
        goToSlide(nextIndex);
    }, 5000);
});