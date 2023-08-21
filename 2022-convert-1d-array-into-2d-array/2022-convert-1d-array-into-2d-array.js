/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if(original.length!==m*n){
        return [];
    }
    const answer=new Array(m).fill(0).map(()=>new Array(n).fill(0));
    let idx=0;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            answer[i][j]=original[idx];
            idx++;
        }
    }
    return answer;
};