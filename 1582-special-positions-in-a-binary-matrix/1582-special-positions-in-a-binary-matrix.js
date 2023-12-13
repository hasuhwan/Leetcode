/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    const m=mat.length;
    const n=mat[0].length;
    let answer=0;
    function checkRow(row){
        return mat[row].filter(el=>el===1).length===1;
    }
    function checkCol(col){
        let count=0;
        for(let i=0; i<m; i++){
            if(mat[i][col]===1){
                count++;
            }
            if(count===2){
                return false;
            }
        }
        return true;
    }
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(mat[i][j]===1){
                if(checkRow(i)&&checkCol(j)){
                    answer++;
                }
            }
        }
    }
    return answer;
};