/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const m=mat.length;
    const n=mat[0].length;
    if(m*n!==r*c){
        return mat;
    }
    const flat=mat.flat();
    let idx=0;
    const answer=new Array(r).fill(0).map(()=>new Array(c).fill(0));
    for(let i=0; i<r; i++){
        for(let j=0; j<c; j++){
            answer[i][j]=flat[idx];
            idx++;
        }
    };
    return answer;
    
};