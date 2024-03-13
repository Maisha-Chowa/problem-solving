function maxProfit(prices) {
  // Initialize variables to track minimum price and maximum profit
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    // Update minimum price if current price is lower
    minPrice = Math.min(minPrice, price);

    // Calculate potential profit for current price and update maxProfit
    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
}

// Example usage:
const prices1 = [7, 1, 5, 3, 6, 4];
const prices2 = [7, 6, 4, 3, 1];

console.log(maxProfit(prices1)); // Output: 5
console.log(maxProfit(prices2)); // Output: 0
