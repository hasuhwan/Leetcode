/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const m=board.length;
    const n=board[0].length;
    const direction=[[1,0],[1,1],[1,-1],[-1,0],[-1,-1],[-1,1],[0,1],[0,-1]];
    const arr=JSON.parse(JSON.stringify(board));
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            let temp=0;
            direction.forEach(el=>{
                if(arr[i+el[0]]&&arr[i+el[0]][j+el[1]]===1){
                    temp++;
                }
            })
            if(temp===3&&arr[i][j]===0){
                board[i][j]=1;
            }else if(temp<2 || temp>3){
                board[i][j]=0;
            }
        }
    }
};