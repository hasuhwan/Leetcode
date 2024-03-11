/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    const n=words.length;
    const map=new Map();
    words.forEach(word=>{
        for(let char of word){
            map.set(char,(map.get(char)||0)+1);
        }
    });
    for(let val of map.values()){
        if(val%n!==0){
            return false;
        }
    }
    return true;
};