

/* const img1 = document.createElement('img')
const img2 = new Image()
img1.src=""

    setTimeout(
    ()=>{
        console.log('Ouc!')
        const box = document.querySelector('#slider-inner')
        box.style.transform = 'translate(200px,0px)'

    },2_000) 

    let positionx = 0
    setInterval(
        () =>{
            const box = document.querySelector('#slider-inner')
            box.style.transform = 'translate($(positionx)px,0px)'
            positionx++
        },16)

    setTimeout(() => {
        clearInterval(anim)
    }, 6_000) */

const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const slideWidth = slides[0].clientWidth;

function goToSlide(index) {
    slidesContainer.style.transition = 'transform 0.5s ease-in-out';
    slidesContainer.style.transform = `translateX(-${slideWidth * index}px)`;
    currentIndex = index;
    }

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
    });

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(currentIndex);
    });
