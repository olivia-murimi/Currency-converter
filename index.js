const currencyFirstEl = document.getElementById("currency-first");

const worthFirstEl = document.getElementById("worth-first")

const currencySecondEl = document.getElementById("currency-sirst");

const worthSecondEl = document.getElementById("worth-second")

const exchangeRateEl = document.getElementById("exchange-rate")

function updateRate(){
 console.log("called")
}


currencyFirstEl.addEventListener("change", updateRate)

currencySecondEl.addEventListener("change", updateRate)

worthFirstEl.addEventListener("input", updateRate)