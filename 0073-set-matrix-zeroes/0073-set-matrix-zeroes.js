/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const m=matrix[0].length;
    const n=matrix.length;
    const zeroIndex=[];
    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(matrix[i][j]===0){
                zeroIndex.push([i,j]);
            }
        }
    }
    zeroIndex.forEach(el=>{
        const [row,col]=el;
        matrix[row]=matrix[row].map(el=>0);
        matrix.forEach(el=>{
            el[col]=0;
        })
    })
    return matrix;
};