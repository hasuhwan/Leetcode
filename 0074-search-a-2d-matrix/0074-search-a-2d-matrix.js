/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m=matrix.length;
    const n=matrix[0].length;
    if(matrix[0][0]>target || matrix[m-1][n-1]<target){
        return false;
    }
    let targetRow=m-1;
    for(let i=0; i<m; i++){
        if(matrix[i][0]===target){
            return true;
        }
        if(matrix[i][0]>target){
            targetRow=i-1;
            break;
        }
    }
   if(matrix[targetRow].includes(target)){
       return true;
   }
    return false;
};