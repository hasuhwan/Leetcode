/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    const a=x^y;
    return a.toString(2).split("").reduce((acc,cur)=>acc+Number(cur),0);
};