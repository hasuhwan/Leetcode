/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let answer=0;
    const queue=[];
    const direction=[[1,0],[-1,0],[0,1],[0,-1]];
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            if(grid[i][j]===2){
                queue.push([i,j,0]);
            }
        }
    }
    while(queue.length!==0){
        const [x,y,time]=queue.shift();
        answer=Math.max(time,answer);
        
        direction.forEach(([dirx,diry])=>{
            const [nextX,nextY]=[x+dirx,y+diry];
            if(nextX<0||nextX>=grid.length||nextY<0||nextY>=grid[0].length||grid[nextX][nextY]!==1){
                return;
            }
            grid[nextX][nextY]=2;
            queue.push([nextX,nextY,time+1]);
        })
    }
    if(grid.flat().includes(1)){
        return -1;
    }
    return answer;
    
};