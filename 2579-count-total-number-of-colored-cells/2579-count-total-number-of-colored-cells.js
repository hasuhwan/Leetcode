/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
    const center=n*2-1;
    let answer=center;
    for(let i=center-2; i>=1; i-=2){
        answer+=2*i;
    }
    return answer;
};
