"use strict";
const price = document.querySelector(".price");
const btnLong = document.querySelector(".btn-long");
const btnShort = document.querySelector(".btn-short");
const valueLoss = document.querySelector(".value-loss");
const valueProfit = document.querySelector(".value-profit");

btnLong.addEventListener("click", () => {
    let currentPrice = price.value;
    price.value = null;
    valueLoss.textContent = (currentPrice * 0.996).toFixed(4);
    valueProfit.textContent = (currentPrice * 1.005).toFixed(4);
});

btnShort.addEventListener("click", () => {
    let currentPrice = price.value;
    price.value = null;
    valueLoss.textContent = (currentPrice * 1.004).toFixed(4);
    valueProfit.textContent = (currentPrice * 0.995).toFixed(4);
});
