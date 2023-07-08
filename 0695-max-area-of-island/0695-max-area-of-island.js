/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let answer=0;
    const m=grid.length;
    const n=grid[0].length;
    const dir=[[1,0],[-1,0],[0,1],[0,-1]];
    function bfs(queue,count){
        while(queue.length!==0){
            const [x,y]=queue.shift();
            count++;
            dir.forEach(([dirX,dirY])=>{
                const [nextX,nextY]=[dirX+x,dirY+y];
                if(grid[nextX]&&grid[nextX][nextY]&&grid[nextX][nextY]===1){
                    grid[nextX][nextY]=0;
                    queue.push([nextX,nextY]);
                }
            })
        }
        answer=Math.max(answer,count);
    }
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j]===1){
                grid[i][j]=0;
                bfs([[i,j]],0);
            }
        }
    }
    return answer;
};