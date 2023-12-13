/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let answer=0;
    function check(board,row){
        for(let i=0; i<row; i++){
            if(board[i]===board[row]){
                return false;
            }
            if(Math.abs(board[i] - board[row]) === Math.abs(i - row)){
                return false;
            }
        }
        return true;
    }
    function dfs(board,row){
        if(row===n-1){
            answer++;
            return;
        }
        for(let i=0; i<n; i++){
            board[row+1]=i;
            if(check(board,row+1)){
                dfs(board,row+1);
            }
        }
    }
    for(let i=0; i<n; i++){
        const board=new Array(n).fill(-1);
        board[0]=i;
        dfs(board,0);
    }
    return answer;
};