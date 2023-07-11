/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const m=matrix.length;
    const n=matrix[0].length;
    const rotate=new Array(n).fill(0).map(()=>new Array(m));
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            rotate[j][m-1-i]=matrix[i][j];
        }
    }
    return rotate.map(el=>el.reverse());
};