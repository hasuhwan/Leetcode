/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function(grid) {
    
    const m=grid.length;
    for(let i=1; i<m; i++){
        const sorted=grid[i-1].map((el,idx)=>[el,idx]).sort((a,b)=>a[0]-b[0]);
        for(let j=0; j<m; j++){
            let idx=0;
            let [min,index]=sorted[idx];
            
            while(index===j){
                [min,index]=sorted[++idx];
            }
            grid[i][j]+=min;
        }
    }
    console.log(grid);
    return Math.min(...grid[m-1]) ;
    
};