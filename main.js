const priceInput = document.getElementById("price-input");
const suggestedTips = document.getElementsByClassName("tip");
const customTip = document.getElementById("custom-tip");
const total = document.getElementById("total");

let percentageTip = 0;

const calculateTable = () => {
    let firstSum = priceInput.value; 
    total.innerText = firstSum;
    let percentage = percentageTip / 100;
    firstSum = Number(firstSum) + (firstSum * percentage)
    total.innerText = firstSum
}

priceInput.addEventListener("input", calculateTable)

document.querySelectorAll('.tip').forEach( tip => {
   tip.addEventListener('click', () => {
    console.log(tip.dataset.value)
    percentageTip = Number(tip.dataset.value)
    calculateTable()
   }) 
})

customTip.addEventListener("input", () => {
    percentageTip = customTip.value;
    calculateTable()
})

const numberRegex = /^\d*\.?\d*$/ 

const enforceNumberOnly = (e) => {
    const value = e.target.value;
    if (!numberRegex.test(value)) {
        e.target.value = value.slice(0, -1);
    }
}

priceInput.addEventListener('input', enforceNumberOnly)
customTip.addEventListener('input', enforceNumberOnly)

