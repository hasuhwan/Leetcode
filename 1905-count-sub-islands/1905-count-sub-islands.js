/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    let answer=0;
    const islands=[];
    const m=grid2.length;
    const n=grid2[0].length;
    const dir=[[1,0],[-1,0],[0,1],[0,-1]];
    function bfs(start){
        const [startx,starty]=start;
        const temp=[];
        const queue=[[startx,starty]];
        grid2[startx][starty]=0;
        while(queue.length!==0){
            const [x,y]=queue.shift();
            temp.push([x,y]);
            dir.forEach(([dirx,diry])=>{
                const [nextx,nexty]=[dirx+x,diry+y];
                if(nextx<0||nexty<0||nextx>=m||nexty>=n||grid2[nextx][nexty]===0){
                    return;
                }
                grid2[nextx][nexty]=0;
                queue.push([nextx,nexty]);
            })
        }
        islands.push(temp);
    }
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid2[i][j]===1){
                bfs([i,j]);
            }
        }
    }
    islands.forEach((island)=>{
        if(island.every(([x,y])=>grid1[x][y]===1)){
            answer++;
        }
    });
    return answer;
};