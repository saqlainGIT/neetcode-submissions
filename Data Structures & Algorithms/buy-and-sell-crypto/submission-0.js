class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
    let minPrice = Infinity;
    const priceDayMap = new Map();

    for (let i = 0; i < prices.length; i++) {
        // Map the day (index) to its corresponding price
        priceDayMap.set(i, prices[i]);
        
        let currentPrice = priceDayMap.get(i);
        
        // Update the minimum buying price seen so far
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        }
        
        // Calculate and update max profit
        let potentialProfit = currentPrice - minPrice;
        if (potentialProfit > maxProfit) {
            maxProfit = potentialProfit;
        }
    }

    return maxProfit;
    }
}
