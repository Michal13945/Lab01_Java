let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const slider = document.getElementById('slider');

document.getElementById('next').addEventListener('click', () => {
    moveToNextSlide();
});

document.getElementById('prev').addEventListener('click', () => {
    moveToPrevSlide();
});

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const index = parseInt(e.target.getAttribute('data-index'));
        moveToSlide(index);
    });
});

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function moveToPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}

function moveToSlide(index) {
    currentIndex = index;
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

updateSlider();
