/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const sorted=String(num).split("").sort();
    return Number(sorted[0]+sorted[3])+Number(sorted[1]+sorted[2]);
    
};