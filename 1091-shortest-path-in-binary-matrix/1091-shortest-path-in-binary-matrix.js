/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const n=grid.length;
    const dir=[[1,0],[0,1],[-1,0],[0,-1],[1,1],[1,-1],[-1,-1],[-1,1]];
    if(grid[0][0]===1||grid[n-1][n-1]===1){
        return -1;
    }
    const arr=grid.map(el=>el.map(num=>num===0?Infinity:1));
    arr[0][0]=1;
    
    const queue=[[0,0]]
    while(queue.length!==0){
        const[x,y]=queue.shift();
        dir.forEach(([dirx,diry])=>{
            const [nextx,nexty]=[x+dirx,y+diry];
            if(nextx<0||nextx>=n||nexty<0||nexty>=n||arr[nextx][nexty]===1||arr[nextx][nexty]<=arr[x][y]+1){
                return;
            }
            arr[nextx][nexty]=arr[x][y]+1;
            queue.push([nextx,nexty]);
        });
    }
    return arr[n-1][n-1]===Infinity?-1:arr[n-1][n-1];
};