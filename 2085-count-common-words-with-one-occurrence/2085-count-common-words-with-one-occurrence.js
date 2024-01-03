/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let answer=0;
    const map=new Map();
    const map2=new Map();
    words1.forEach(word=>{
        map.set(word,(map.get(word)||0)+1);
    });
    words2.forEach(word=>{
        map2.set(word,(map2.get(word)||0)+1);
    });
    
    for(let [key,val] of map.entries()){
        if(val===1&&map2.get(key)===1){
            answer++;
        }
    }
    return answer;
};