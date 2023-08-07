/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const answer=[];
    const m=matrix.length;
    const n=matrix[0].length;
    const rot=new Array(n).fill(0).map(()=>new Array(m).fill(0));
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            rot[j][m-1-i]=matrix[i][j];
        }
    }
    
    matrix.forEach((row,idx)=>{
        const min=Math.min(...row);
        const index=row.indexOf(min);
        if(min===Math.max(...rot[index])){
            answer.push(min);
        }
    });
    return answer;
};