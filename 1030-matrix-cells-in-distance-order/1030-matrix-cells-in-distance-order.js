/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    const answer=[];
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            const row=Math.abs(i-rCenter);
            const col=Math.abs(j-cCenter);
            answer.push([i,j,row+col]);
            
        }
    }
    return answer.sort((a,b)=>a[2]-b[2]).map(el=>[el[0],el[1]]);
};