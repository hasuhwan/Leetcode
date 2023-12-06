/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let answer=0;
    for(let i=0; i<n; i++){
        const plus=Math.floor(i/7);
        const mod=i%7+1;
        answer+=plus+mod;
    }
    return answer;
};