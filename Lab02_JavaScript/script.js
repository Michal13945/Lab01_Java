const img1 = document.createElement('img')
const img2 = new Image()
img1.src=""

/* setTimeout(
    ()=>{
        console.log('Ouc!')
        const box = document.querySelector('#slider-inner')
        box.style.transform = 'translate(200px,0px)'

    },2_000) */

    let positionx = 0
    setInterval(
        () =>{
            const box = document.querySelector('#slider-inner')
            box.style.transform = 'translate($(positionx)px,0px)'
            positionx++
        },16)

    setTimeout(() => {
        clearInterval(anim)
    }, 6_000)

    