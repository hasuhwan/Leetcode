/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const map=new Map();
    for(let char of s){
        map.set(char,(map.get(char)||0)+1);
    }
    return new Set(map.values()).size===1?true:false;
};