/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
    const m=matrix.length;
    const n=matrix[0].length;
    
    const answer=new Array(m).fill().map(()=>new Array(n).fill(0));
    const maxCol=new Array(n).fill(0);
    
    for(let j=0; j<n; j++){
        let max=-Infinity;
        for(let i=0; i<m; i++){
            max=Math.max(max,matrix[i][j]);
        }
        maxCol[j]=max;
    }
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(matrix[i][j]===-1){
                answer[i][j]=maxCol[j];
            }else{
                answer[i][j]=matrix[i][j];
            }
        }
    }
    return answer;
    
};