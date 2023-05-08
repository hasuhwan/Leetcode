/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let answer=0;
    const len=mat.length;
    const arr=new Array(len).fill(0).map(()=>new Array(len).fill(false));
    
    for(let i=0; i<len; i++){
        if(!arr[i][i]){
            answer+=mat[i][i];
            arr[i][i]=true;
        }
        if(!arr[i][len-1-i]){
            answer+=mat[i][len-1-i];
            arr[i][len-1-i]=true;
        }
    }
    return answer;
};