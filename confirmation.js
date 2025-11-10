const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const type = params.get("type");
const size = params.get("size");
const quantity = parseInt(params.get("quantity")) || 1;
const instructions = params.get("instructions") || "None";
const toppings = params.getAll("toppings");
const sizePrices = { Small: 8, Medium: 12, Large: 16 };
const toppingPrices = {
  "Extra Cheese": 2,
  "Mushrooms": 1.5,
  "Olives": 1.5,
  "Peppers": 1
};
const basePrice = sizePrices[size] * quantity;
let toppingsCost = 0;
toppings.forEach(t => toppingsCost += (toppingPrices[t] || 0) * quantity);
const total = basePrice + toppingsCost;
document.getElementById("summary").innerHTML = `
  <p><strong>Customer:</strong> ${name}</p>
  <p><strong>Pizza Type:</strong> ${type}</p>
  <p><strong>Size:</strong> ${size}</p>
  <p><strong>Quantity:</strong> ${quantity}</p>
  <p><strong>Toppings:</strong> ${toppings.length ? toppings.join(", ") : "None"}</p>
  <p><strong>Delivery Instructions:</strong> ${instructions}</p>
  <hr>
  <p><strong>Base Price:</strong> $${basePrice.toFixed(2)}</p>
  <p><strong>Toppings Cost:</strong> $${toppingsCost.toFixed(2)}</p>
  <p><strong>Total Price:</strong> <b>$${total.toFixed(2)}</b></p>
  <hr>
  <p>Estimated Delivery Time: 30 minutes</p>
`;
document.getElementById("newOrder").addEventListener("click", () => {
  window.location.href = "order.html";
});
