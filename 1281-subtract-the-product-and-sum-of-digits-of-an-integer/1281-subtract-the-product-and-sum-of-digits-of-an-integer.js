/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const split=String(n).split("").map(str=>Number(str));
    const mul=split.reduce((acc,cur)=>acc*cur,1);
    const sum=split.reduce((acc,cur)=>acc+cur,0);
    return mul-sum;
};