"use strict";
const price = document.querySelector(".price");
const btnLong = document.querySelector(".btn-long");
const btnShort = document.querySelector(".btn-short");
const valueLoss = document.querySelector(".value-loss");
const valueProfit = document.querySelector(".value-profit");
const radioBtns = document.querySelectorAll(".radio-input");
const profPerc = document.querySelector(".input-limt");
const lossPerc = document.querySelector(".input-stls");
const selectCrypto = () => {
    let selectedCrypto;
    for (let radioBtn of radioBtns) {
        if (radioBtn.checked) {
            selectedCrypto = radioBtn.value;
            break;
        }
    }
    return selectedCrypto;
};

btnLong.addEventListener("click", () => {
    let selectedCrypto = selectCrypto();
    let currentPrice = price.value;
    let profit = profPerc.value / 100;
    let loss = lossPerc.value / 100;
    if (selectedCrypto === "Bitcoin" || selectedCrypto === "Etherum") {
        valueLoss.textContent = (currentPrice * (1 - loss)).toFixed(1);
        valueProfit.textContent = (currentPrice * (1 + profit)).toFixed(1);
    } else {
        valueLoss.textContent = (currentPrice * (1 - loss)).toFixed(4);
        valueProfit.textContent = (currentPrice * (1 + profit)).toFixed(4);
    }
});

btnShort.addEventListener("click", () => {
    let selectedCrypto = selectCrypto();
    let currentPrice = price.value;
    let profit = profPerc.value / 100;
    let loss = lossPerc.value / 100;
    if (selectedCrypto === "Bitcoin" || selectedCrypto === "Etherum") {
        valueLoss.textContent = (currentPrice * (1 + loss)).toFixed(1);
        valueProfit.textContent = (currentPrice * (1 - profit)).toFixed(1);
    } else {
        valueLoss.textContent = (currentPrice * (1 + loss)).toFixed(4);
        valueProfit.textContent = (currentPrice * (1 - profit)).toFixed(4);
    }
});
