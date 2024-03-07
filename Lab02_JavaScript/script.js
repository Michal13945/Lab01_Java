

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

const slider = document.getElementById('slider');
const slides = document.getElementsByClassName('slide');
let currentSlide = 0;

function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
  currentSlide = index;
}

function prevSlide() {
  if (currentSlide === 0) {
    showSlide(slides.length - 1);
  } else {
    showSlide(currentSlide - 1);
  }
}

function nextSlide() {
  if (currentSlide === slides.length - 1) {
    showSlide(0);
  } else {
    showSlide(currentSlide + 1);
  }
}

document.getElementById('prev').addEventListener('click', prevSlide);
document.getElementById('next').addEventListener('click', nextSlide);

showSlide(currentSlide);