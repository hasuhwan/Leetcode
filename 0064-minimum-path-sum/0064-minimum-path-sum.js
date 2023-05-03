/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m=grid.length;
    const n=grid[0].length;
    const arr=new Array(m+1).fill(0).map(()=>new Array(n+1).fill(0));
  
    for(let i=0; i<m; i++ ){
        for(let j=0; j<n; j++){
            if(i===0){
                arr[i+1][j+1]=grid[i][j]+arr[i+1][j];
                continue;
            }
            if(j===0){
                arr[i+1][j+1]=grid[i][j]+arr[i][j+1];
                continue;
            }
            arr[i+1][j+1]=Math.min(grid[i][j]+arr[i][j+1],grid[i][j]+arr[i+1][j]);
        }
    }
    return arr[m][n];
};