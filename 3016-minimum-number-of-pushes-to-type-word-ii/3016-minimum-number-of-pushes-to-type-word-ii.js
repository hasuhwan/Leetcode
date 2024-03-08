/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let answer=0;
    let pushing=1;
    let count=8;
    const map=new Map();
    
    for(let char of word){
        map.set(char,(map.get(char)||0)+1);
    }
    const sorted=[...map.values()].sort((a,b)=>b-a);
    for(let val of sorted){
        answer+=val*pushing;
        count--;
        if(count===0){
            count=8;
            pushing++;
        }
    }
    return answer;
    
};