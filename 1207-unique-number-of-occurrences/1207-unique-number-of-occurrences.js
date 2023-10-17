/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map=new Map();
    arr.forEach((num)=>{
        map.set(num,(map.get(num)||0)+1);
    });
return [...map.values()].length===new Set(map.values()).size;
};