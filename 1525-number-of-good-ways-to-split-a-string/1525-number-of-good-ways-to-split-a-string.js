/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
    let answer=0;
    const map=new Map();
    const set=new Set();
    for(let i=0; i<s.length; i++){
        map.set(s[i],(map.get(s[i])||0)+1);
    }
    for(let i=0; i<s.length-1; i++){
        set.add(s[i]);
        if(map.get(s[i])===1){
            map.delete(s[i]);
        }else{
            map.set(s[i],map.get(s[i])-1);
        }
        if(set.size===map.size){
            answer++;
        }
    }
    return answer;
    
};