/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m=matrix.length;
    const n=matrix[0].length;
    
    let i=0;
    let j=n-1;
    
    while(j>=0&&i<m){
        if(matrix[i][j]===target){
            return true;
        }else if(matrix[i][j]>target){
            j--;
        }else{
            i++;
        }
    }
    return false;
};


