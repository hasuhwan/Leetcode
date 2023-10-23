/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const dp=new Array(n+1).fill(0);
    dp[1]=1;
    dp[2]=1;
    for(let i=3; i<dp.length; i++){
        dp[i]=dp[i-2]+dp[i-1]+dp[i-3];
    }
    return dp[n];
};