/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
return new Array(numOnes).fill(1).concat(new Array(numZeros).fill(0),new Array(numNegOnes).fill(-1)).slice(0,k).reduce((acc,cur)=>acc+cur,0);

};