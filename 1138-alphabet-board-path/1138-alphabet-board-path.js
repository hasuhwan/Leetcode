/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
    const board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"];
    let idx=0;
    let answer="";
    let row=0;
    let col=0;
    const dir=[[1,0,"D"],[-1,0,"U"],[0,1,"R"],[0,-1,"L"]];
    while(idx<target.length){
        const queue=[[row,col,""]];
        const visited=new Array(5).fill(0).map(()=>new Array(5).fill(false)).concat([[false]]);
        while(queue.length!==0){
            const [x,y,str]=queue.shift();
            visited[x][y]=true;
            if(board[x][y]===target[idx]){
                answer+=str+"!";
                row=x;
                col=y;
                idx++;
                break;
            }
            dir.forEach(([dirX,dirY,i])=>{
                const [nextX,nextY]=[x+dirX,y+dirY];
                if(board[nextX]&&board[nextX][nextY]&&visited[nextX][nextY]===false){
                    visited[nextX][nextY]=true;
                    queue.push([nextX,nextY,str+i]);
                }
            })
            
            
        }
    }
    return answer;
};