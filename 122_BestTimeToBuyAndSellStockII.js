// Say you have an array for which the ith element is the price of a given stock on day i.
//
//     Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and
// sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time
// (ie, you must sell the stock before you buy again).

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length <= 1) {
        return 0;
    }
    var profit = 0;
    for(var i = 0; i < prices.length - 1; i++) {
        if(prices[i+1] > prices[i]) {
            profit += prices[i+1] - prices[i];
        }
    }
    return profit;
};

console.log(maxProfit([7,2,5,3,1]));
console.log(maxProfit([4,7,8,2,8]));