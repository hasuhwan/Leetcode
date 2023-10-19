/**
 * @param {number[][]} grid
 * @param {number[][]} moveCost
 * @return {number}
 */
var minPathCost = function(grid, moveCost) {
    const m=grid.length;
    const n=grid[0].length;
    const sumArr=new Array(m).fill(0).map(()=>new Array(n).fill(0));
    sumArr[0]=[...grid[0]];
    function getMin(row,col){
        let min=Infinity;
        for(let i=0; i<sumArr[row].length; i++){
            const temp=sumArr[row][i]+moveCost[grid[row][i]][col];
            min=Math.min(temp,min);
        }
        return min;
    }
    for(let i=1; i<m; i++){
        for(let j=0; j<n; j++){
            sumArr[i][j]=grid[i][j]+getMin(i-1,j);
        }
    }
return Math.min(...sumArr[m-1]);
};