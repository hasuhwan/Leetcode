/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let answer=0;
    const n=grid.length;
    const row=new Array(n).fill(0);
    const col=new Array(n).fill(0);
    for(let i=0; i<n; i++){
        row[i]=Math.max(...grid[i]);
    }
    for(let i=0; i<n; i++){
        let max=0;
        for(let j=0; j<n; j++){
            max=Math.max(max,grid[j][i]);
        }
        col[i]=max;
    }
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            answer+=Math.min(row[i],col[j])-grid[i][j];
        }
    }
    return answer;
};