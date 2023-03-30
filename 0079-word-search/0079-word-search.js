/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m=board[0].length;
    const n=board.length;
    const startIndex=[];
    const direction=[[1,0],[-1,0],[0,1],[0,-1]];
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(board[i][j]===word[0]){
                startIndex.push([i,j]);
            }
        }
    }
    function dfs(X,Y,depth,visitedArr){
        if(depth===word.length-1){
                return true;
            }
            for(let i=0; i<direction.length; i++){
                const [nextX,nextY]=direction[i];
                const newX=X+nextX;
                const newY=Y+nextY;
                if(newX>=0&&newX<n&&newY>=0&&newY<m&& board[newX][newY]===word[depth+1] &&visitedArr[newX][newY]===false){
                    visitedArr[newX][newY]=true;
                    if(dfs(newX,newY,depth+1,visitedArr)){
                        return true;
                    }
                    visitedArr[newX][newY]=false;
                }
            }
    }
    for(let i=0; i<startIndex.length; i++){
        const visitedArr=new Array(n).fill(0).map(el=>new Array(m).fill(false));
        const [X,Y]=startIndex[i];
        visitedArr[X][Y]=true;
if(dfs(X,Y,0,visitedArr)){
    return true;
}
        
    }
    return false;
};