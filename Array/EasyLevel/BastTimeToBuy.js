var maxProfit = function(prices) {
    if(prices==null || prices.length<=) return 0;
    let MinBuy= prices[0];
    let profit = 0;
    for(let i=1; i< prices.length; i++)
    {
        MinBuy = Math.min(MinBuy , prices[i]);
        profit =  Math.max(profit , prices[i]-MinBuy);
    }
    return profit;
};
