let allInputs = document.querySelectorAll('input')
const box = document.querySelector('.container')
const btn = document.querySelector('.btn')
const addBtn = document.querySelector('.addBtn')
const removeBtn = document.querySelector('.removeBtn')

const calculate = () =>
{
    let sum = 0
    let min = Number.MAX_VALUE
    let max = Number.MIN_VALUE
    let count = 0
    let avg

    for(const input of allInputs)
    {
        let value = parseFloat(input.value)
        if(value != null && value == value)
        {
            sum += value
            min = Math.min(min, value)
            max = Math.max(max, value)
            count++
        }
    }

    avg = sum/count

    document.querySelector('.sum').textContent = `Sum: ${sum}`
    document.querySelector('.maxNu').textContent = `Max number: ${max}`
    document.querySelector('.minNu').textContent = `Min number: ${min}`
    document.querySelector('.avg').textContent = `Average: ${avg}`

}

const addInputText = () => 
{ 
    const child = document.createElement('input')
    child.type = "text"
    child.placeholder = "Enter the number"
    child.style.margin = "2px"
    document.querySelector('.container').appendChild(child)
    allInputs = document.querySelectorAll('input')
}

const removeInputText = () =>
{
    box.removeChild(box.lastChild)
    allInputs = document.querySelectorAll('input')
    calculate()
}


allInputs.forEach(input => {addEventListener('change', calculate)})
addBtn.addEventListener('click', addInputText)
removeBtn.addEventListener('click', removeInputText)

    
/*const input1 = document.querySelector('#vali')
console.dir(input1)
console.log(input1.value)
input1.value = 20

//pobierz div-a
const pojemnikNaWyniki = document.querySelector('.wyniki')
pojemnikNaWyniki.textContent = input1.value

//reagowanie na kliknięcie
const przeliczBtn = document.querySelector("#przelicz")
przeliczBtn.addEventListener('click',()=>{
    console.log('user dusił buttona')
    const min1z10 = Math.s
    const min1z10 = Math.min(1,2,3,4,5)
    const min1z10 = Math.min(1,2,3,4,5)

})
*/

