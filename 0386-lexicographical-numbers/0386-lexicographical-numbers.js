/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    const arr=new Array(n).fill(0).map((_,idx)=>idx+1);
    return arr.sort();
};