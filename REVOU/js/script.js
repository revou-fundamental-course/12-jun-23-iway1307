const celciusEl = document.querySelector(".celcius");
const fahrenheitEl = document.querySelector(".fahrenheit");

celciusEl.addEventListener("input",()=>{
    const result = ( parseFloat(celciusEl.value) * 9/5 ) + 32;
    fahrenheitEl.value = parseFloat(result.toFixed(2));
})

fahrenheitEl.addEventListener("input",()=>{
    const result = ( parseFloat(fahrenheitEl.value) - 32) * 5/9;
    celciusEl.value = parseFloat( result.toFixed(2));
})