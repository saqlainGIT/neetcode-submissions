class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit= 0;
        let minPrice = Infinity;

    for(let i =0 ; i<prices.length; i++)
    {
        let currentPrice = prices[i];
        minPrice = Math.min(currentPrice,minPrice);

        if(minPrice > currentPrice)
        {
            minPrice = currentPrice
        }
       let profit = currentPrice - minPrice;

        maxProfit = Math.max(profit, maxProfit);
    }
    return maxProfit;
}

}
