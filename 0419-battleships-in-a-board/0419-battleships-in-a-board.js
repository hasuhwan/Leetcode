/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let answer=0;
    const m=board.length;
    const n=board[0].length;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(board[i][j]==="X"){
                board[i][j]=".";
                let [nextx,nexty]=[i+1,j];
                while(board[nextx]&&board[nextx][nexty]==="X"){
                    board[nextx][nexty]="."
                    nextx++;
                }
                [nextx,nexty]=[i,j+1];
                while(board[nextx][nexty]==="X"){
                    board[nextx][nexty]="."
                    nexty++;
                }
                answer++;
            }
        }
    }
    return answer;
};