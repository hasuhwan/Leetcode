/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    let answer=Infinity;
    const map1=new Map();
    const map2=new Map();
    for(let i=0; i<target.length; i++){
        map1.set(target[i],(map1.get(target[i])||0)+1);
    }
    for(let i=0; i<s.length; i++){
        map2.set(s[i],(map2.get(s[i])||0)+1);
    }
    for(let [char,val] of map1.entries()){
        if(!map2.has(char)){
            return 0;
        }
        const count=Math.floor(map2.get(char)/val);
        answer=Math.min(answer,count);
    }
    return answer;
    
    
    
};