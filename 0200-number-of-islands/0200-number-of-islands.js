/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let answer=0;
    const m=grid.length;
    const n=grid[0].length;
    const direction=[[1,0],[-1,0],[0,1],[0,-1]];
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            
            if(grid[i][j]==="1"){
                answer++;
                const queue=[[i,j]];
                grid[i][j]="0";
                while(queue.length!==0){
                    const [x,y]=queue.shift();
                    for(let i=0; i<direction.length; i++){
                        const [nextX,nextY]=[direction[i][0]+x,direction[i][1]+y];
                        if(nextX>=0&&nextX<m&&nextY>=0&&nextY<n&&grid[nextX][nextY]==="1"){
                            grid[nextX][nextY]="0";
                            queue.push([nextX,nextY]);
                        }
                    }
                }
                
            }
        }
    }
    return answer;
};