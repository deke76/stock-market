const maxProfit = function(arrayPrices) {
  let max = 0;
  let result = -1;

  for (let i = arrayPrices.length - 1; i >= 0; i--) {
    if (arrayPrices[i] > max) max = arrayPrices[i];
    let tempResult = (max - arrayPrices[i]) - 1;
    if (tempResult > result) result = tempResult + 1;
  }

  return result;
};

module.exports = maxProfit;