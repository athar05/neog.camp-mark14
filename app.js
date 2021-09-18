var initialPrice = document.getElementById("initial-price");
var stockQuantity = document.getElementById("stock-quantity");
var currentPrice = document.getElementById("current-price");
var button = document.getElementById("check-btn");
var output = document.getElementById("output");

button.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stockQuantity.value);
  var cur = Number(currentPrice.value);

  calculateProfitAndLoss(ip, qty, cur);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    output.innerText = `Your loss is ${loss}₹ and the loss percent is ${lossPercentage}%`;
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    output.innerText = `Your profit is ${profit}₹ and the profit percent is ${profitPercentage}%`;
  } else {
    output.innerText = "No Profit, No Loss";
  }
}
