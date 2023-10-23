/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m=obstacleGrid.length;
    const n=obstacleGrid[0].length;
    const dp=new Array(m).fill(0).map(()=>new Array(n).fill(1));
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(obstacleGrid[i][j]===1){
                dp[i][j]=0;
            }else if(i===0&&j===0){
                continue;
            }else if(i===0&&j!==0){
                     dp[i][j]=dp[i][j-1];
            }else if(i!==0&&j===0){
                    dp[i][j]=dp[i-1][j];
            }else{
                dp[i][j]=dp[i-1][j]+dp[i][j-1];
            }
        }
    }
    return dp[m-1][n-1];
};