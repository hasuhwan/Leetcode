/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const dp=new Array(triangle.length).fill(0).map((_,idx)=>new Array(idx+1).fill(0));
    dp[0][0]=triangle[0][0];
    for(let i=1; i<dp.length; i++){
        for(let j=0; j<dp[i].length; j++){
            const left=dp[i-1][j-1]===undefined?Infinity:dp[i-1][j-1];
            const right=dp[i-1][j]===undefined?Infinity:dp[i-1][j];
            dp[i][j]=Math.min(left,right)+triangle[i][j];
        }
    }
    return Math.min(...dp[dp.length-1]);
};
// 1               1
// -5 -2       -4      -1
// 3 6 1       -1  2       0
// -1 2 4 -3   -2 1  4