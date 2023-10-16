/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length!==word2.length){
        return false;
    }
    const map1=new Map();
    const map2=new Map();
    
    function set(word,map){
        for(let i=0; i<word.length; i++){
            map.set(word[i],(map.get(word[i])||0)+1);
        }
        return [...map.values()].sort((a,b)=>a-b).join("");
    }
    const a=set(word1,map1);
    const b=set(word2,map2);
    if(map1.size!==map2.size){
        return false;
    }
    for(let k of map1.keys()){
        if(!map2.has(k)){
            return false;
        }
    }
    return a===b;
    
};