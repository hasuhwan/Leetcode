/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp=new Array(amount+1).fill(Infinity);
    dp[0]=0;
    for(let i=0; i<coins.length; i++){
        const cur=coins[i];
        for(let j=0; j<dp.length; j++){
            if(cur<=j){
                dp[j]=Math.min(dp[j],dp[j-cur]+1);
            }
        }
    }
    return dp[amount]===Infinity?-1:dp[amount];
};