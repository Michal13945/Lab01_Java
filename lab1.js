
const przeliczBtn = document.querySelector("#przelicz")
przeliczBtn.addEventListener('click',()=>{
    var input1 = parseFloat(document.getElementById('input1').value);
    var input2 = parseFloat(document.getElementById('input2').value);
    var input3 = parseFloat(document.getElementById('input3').value);
    var input4 = parseFloat(document.getElementById('input4').value);

    var suma = input1 + input2 + input3 + input4;
    var srednia = suma / 4;
    var min = Math.min(input1, input2, input3, input4);
    var max = Math.max(input1, input2, input3, input4);

    document.write("Suma: " + suma + "<br>");
    document.write("Średnia: " + srednia + "<br>");
    document.write("Min: " + min + "<br>");
    document.write("Max: " + max);
})


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

