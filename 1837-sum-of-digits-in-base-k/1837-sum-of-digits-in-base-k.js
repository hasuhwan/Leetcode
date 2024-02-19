/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    const num=n.toString(k);
    let answer=0;
    for(let str of num){
        answer+=Number(str);
    }
    return answer;
};