import createCard from "./createcard.js";
import data from "./Data.js";



const adsContainer = document.getElementById("adsContainer");

data.forEach(ad => {
      const adElement = createCard(ad);
      adsContainer?.appendChild(adElement);
    });



const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const minValue = document.getElementById("minValue");
const maxValue = document.getElementById("maxValue");

function updatePrices() {
  minValue.textContent = "$" + minPrice.value;
  maxValue.textContent = "$" + maxPrice.value;
}

minPrice.addEventListener("input", updatePrices);
maxPrice.addEventListener("input", updatePrices);


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.ad-card').forEach(card => {
    card.onclick = (el) => {
      const link = el.currentTarget.dataset.link;
      if (link) window.location.assign(link);
    };
  });
});

