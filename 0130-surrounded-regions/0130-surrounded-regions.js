/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const m=board.length;
    const n=board[0].length;
    const direction=[[1,0],[-1,0],[0,1],[0,-1]];
    let arr=[];
    let visited=[];
    function dfs(temp){
        const [x,y]=temp;
        for(let i=0; i<direction.length; i++){
            const [nextX,nextY]=[x+direction[i][0],y+direction[i][1]];
            if(nextX<0||nextX>=m||nextY<0||nextY>=n){
                continue;
            }
            if(board[nextX][nextY]==="O"&&!visited.includes(String(nextX)+nextY)){
                arr.push([nextX,nextY]);
                visited.push(String(nextX)+nextY);
                dfs([nextX,nextY]);
            }
        }
    }
    function checkFunc(arr){
        for(let i=0; i<arr.length; i++){
            const [x,y]=arr[i];
            const bool=direction.every(([dirx,diry])=>{
                const [nextX,nextY]=[x+dirx,y+diry];
                if(nextX<0||nextX>=m||nextY<0||nextY>=n){
                    return false;
                }else{
                    return true;
                }
                
            })
            if(!bool){
                return false;
            }
        }
        return true;
    }
    for(let i=0; i<m; i++){
        
        for(let j=0; j<n; j++){
            arr=[];
        visited=[];
            if(board[i][j]==="O"){
                arr.push([i,j]);
                visited.push(String(i)+j);
                dfs([i,j]);
                if(checkFunc(arr)){
                    arr.forEach(([x,y])=>{
                        board[x][y]="X";
                    })
                }
            }
        }
    }
    return board;
};