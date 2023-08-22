/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    let answer=Infinity;
    const m=grid.length;
    const dir=[[1,0],[-1,0],[0,1],[0,-1]];
    const one=[];
    const two=[];
    function bfs(queue,arr){
        grid[queue[0][0]][queue[0][1]]=0;
        while(queue.length!==0){
            const [x,y]=queue.shift();
            arr.push([x,y]);
            dir.forEach(([dirx,diry])=>{
                const [nextx,nexty]=[dirx+x,diry+y];
                if(nextx<0||nexty<0||nextx>=m||nexty>=m||grid[nextx][nexty]===0){
                    return;
                }else{
                    grid[nextx][nexty]=0;
                    queue.push([nextx,nexty]);
                }
            })
        }
    }
    for(let i=0; i<m; i++){
        for(let j=0; j<m; j++){
            if(grid[i][j]===1){
                if(one.length===0){
                    bfs([[i,j]],one);
                }else{
                    bfs([[i,j]],two);
                }
            }
        }
    }
    one.forEach(([x,y])=>{

        two.forEach(([nextx,nexty])=>{
            answer=Math.min(answer,Math.abs(nextx-x)+Math.abs(nexty-y)-1);
        })
    });
    return answer;
};