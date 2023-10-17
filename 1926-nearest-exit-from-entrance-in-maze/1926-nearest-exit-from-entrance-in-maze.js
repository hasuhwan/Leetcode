/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const m=maze.length;
    const n=maze[0].length;
    const dir=[[1,0],[-1,0],[0,1],[0,-1]];
    const queue=[[...entrance,0]];
    maze[entrance[0]][entrance[1]]="+";
    while(queue.length!==0){
        const [x,y,count]=queue.shift();
        if((x===0||x===m-1||y===0||y===n-1)&&count!==0){
            return count;
        }
        dir.forEach(([dirx,diry])=>{
            const [nextx,nexty]=[x+dirx,y+diry];
            if(nextx<0||nextx>=m||nexty<0||nexty>=n||maze[nextx][nexty]==="+"){
                return;
            }
            maze[nextx][nexty]="+";
            queue.push([nextx,nexty,count+1]);
        });
    }
    return -1;
};