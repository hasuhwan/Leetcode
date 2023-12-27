/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    const map=new Map();
    for(let i=0; i<word1.length; i++){
        map.set(word1[i],(map.get(word1[i])||0)+1);
    }
    for(let i=0; i<word2.length; i++){
        map.set(word2[i],(map.get(word2[i])||0)-1);
    }
    for(let val of map.values()){
        if(Math.abs(val)>3){
            return false;
        }
    }
    return true;
};