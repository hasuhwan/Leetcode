/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    const answer=[];
    const maxMap=new Map();
    function countFunc(str){
        const map=new Map();
        for(let char of str){
            map.set(char,(map.get(char)||0)+1);
        }
        return map;
    }
    words2.forEach(word=>{
        const map=countFunc(word);
        for(let [key,value] of map.entries()){
            if(!maxMap.has(key)){
                maxMap.set(key,value);
            }else{
                maxMap.set(key,Math.max(maxMap.get(key),value));
            }
        }
    });
    words1.forEach(word=>{
        const map=countFunc(word);
        for(let [key,value] of maxMap.entries()){
            if(!map.has(key)||map.get(key)<value){
                return;
            }
        }
        answer.push(word);
    });
    return answer;
};