/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    let answer=0;
    const m=grid.length;
    const n=grid[0].length;
    const dir=[[1,0],[-1,0],[0,1],[0,-1]];
    const set=new Set();
  const size=m*n;
    let [startX,startY]=[0,0];
    let [endX,endY]=[0,0];
    function dfs(x,y,set){
        if(x===endX&&y===endY){
            if(set.size===size){
                
                answer++;
            }
            return;
        }
        
        dir.forEach(([dirx,diry])=>{
            const [nextx,nexty]=[x+dirx,y+diry];
            if(nextx<0||nexty<0||nextx>=m||nexty>=n||set.has(nextx+""+nexty)){
                return;
            }
            set.add(nextx+""+nexty)
            dfs(nextx,nexty,set);
            set.delete(nextx+""+nexty);
        });
    }
  
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            if(grid[i][j]===1){
                [startX,startY]=[i,j];
                set.add(i+""+j);
            }else if(grid[i][j]===-1){
                set.add(i+""+j);
            }else if(grid[i][j]===2){
                [endX,endY]=[i,j];
            }
        }
    }
    dfs(startX,startY,set);
    return answer;
};