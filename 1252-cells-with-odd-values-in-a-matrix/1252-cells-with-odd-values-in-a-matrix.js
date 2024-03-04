/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    let answer=0;
    const rowArr=new Array(m).fill(1);
    const colArr=new Array(n).fill(1);
    indices.forEach(([row,col])=>{
        rowArr[row]*=-1;
        colArr[col]*=-1;
    });
    rowArr.forEach(row=>{
        colArr.forEach(col=>{
            if(row*col===-1){
                answer++;
            }
        })
    });
    return answer;
};