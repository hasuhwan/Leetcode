/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    for(let i=0; i<=c; i=Math.pow(Math.sqrt(i)+1,2)){
        const b=Math.sqrt(c-i);
        if(b===Math.floor(b)){
            return true;
        }
    }
    return false;
};