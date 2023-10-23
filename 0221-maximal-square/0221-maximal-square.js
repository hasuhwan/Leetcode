/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let max=0;
    const m=matrix.length;
    const n=matrix[0].length;
    const dp=new Array(m).fill(0).map(()=>new Array(n).fill(0));
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(i===0 ||j===0){
                dp[i][j]=Number(matrix[i][j]);
            }else if(matrix[i][j]==="1"){
                dp[i][j]=Math.min(dp[i][j-1],dp[i-1][j],dp[i-1][j-1])+1;
            }else{
                dp[i][j]=0;
            }
            max=Math.max(max,dp[i][j]);
        }
    }
    return max*max;
};