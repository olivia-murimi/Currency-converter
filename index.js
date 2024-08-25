const currencyFirstEl = document.getElementById("currency-first");

const worthFirstEl = document.getElementById("worth-first")

const currencySecondEl = document.getElementById("currency-sirst");

const worthSecondEl = document.getElementById("worth-second")

const exchangeRateEl = document.getElementById("exchange-rate")

function updateRate(){
 fetch (`https://v6.exchangerate-api.com/v6/c7dfc4f7c2eacd2aef4355dd/latest/${currencyFirstEl.value}`

 )
 .then((res)=>res.json())
 .then((data)=>(
    console.log(data);
 ))
}


currencyFirstEl.addEventListener("change", updateRate)

currencySecondEl.addEventListener("change", updateRate)

worthFirstEl.addEventListener("input", updateRate)