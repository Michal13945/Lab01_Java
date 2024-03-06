
const inputs = document.querySelectorAll("input[type=text]");
      const button = document.getElementById("calculateButton").addEventListener("click", calculate);

      function calculate() {
        let sum = 0;
        let min = Number.MAX_VALUE;
        let max = Number.MIN_VALUE;
        let count = 0;

        for (const input of inputs) {
          const value = parseFloat(input.value);
          if (isNaN(value)) continue;
          sum += value;
          min = Math.min(min, value);
          max = Math.max(max, value);
          count++;
        }

        const avg = sum / count;

        document.getElementById("sum").textContent = `Sum: ${sum}`;
        document.getElementById("sumAvg").textContent = `Average: ${avg}`;
        document.getElementById("min").textContent = `Min: ${min}`;
        document.getElementById("max").textContent = `Max: ${max}`;
      }


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

