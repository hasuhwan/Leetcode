/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {
    const m=grid.length;
    const n=grid[0].length;
    let answer=0;
    const dir=[[1,0],[-1,0],[0,1],[0,-1]];
    
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j]!==0){
                const queue=[[i,j]];
                let sum=grid[i][j];
                grid[i][j]=0;
                while(queue.length!==0){
                    const [x,y]=queue.shift();
                    dir.forEach(([dirx,diry])=>{
                        const [nextx,nexty]=[dirx+x,diry+y];
                        if(nextx<0||nextx>=m||nexty<0||nexty>=n||grid[nextx][nexty]===0){
                            return;
                        }
                        queue.push([nextx,nexty]);
                        sum+=grid[nextx][nexty];
                        grid[nextx][nexty]=0;
                    })
                }
                answer=Math.max(answer,sum);
            }
        }
    }
    return answer;
};