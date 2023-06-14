/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a,b)=>a-b);
    const min=prices[0]+prices[1];
    if(min>money){
        return money;
    }else{
        return money-min;
    }
};