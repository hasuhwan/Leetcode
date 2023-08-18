/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    let answer=0;
    const m=grid.length;
    const n=grid[0].length;
    const dir=[[1,0],[-1,0],[0,1],[0,-1]];
    const visited=new Array(m).fill(0).map(()=>new Array(n).fill(false));
    function back(sum,idx){
        answer=Math.max(answer,sum);
        const [x,y]=idx;
        dir.forEach(([dirx,diry])=>{
            const [nextx,nexty]=[dirx+x,diry+y];
            if(nextx<0||nexty<0||nextx>=m||nexty>=n||visited[nextx][nexty]===true||grid[nextx][nexty]===0){
                return;
            }
            visited[nextx][nexty]=true;
            back(sum+grid[nextx][nexty],[nextx,nexty]);
            visited[nextx][nexty]=false;
        })
    }
    
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            visited[i][j]=true;
            back(grid[i][j],[i,j]);
            visited[i][j]=false;
        }
    }
    return answer;
};