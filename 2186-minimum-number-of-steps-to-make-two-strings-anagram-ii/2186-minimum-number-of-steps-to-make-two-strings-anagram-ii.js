/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let answer=0;
    const map=new Map();
    for(let i=0; i<s.length; i++){
        map.set(s[i],(map.get(s[i])||0)+1);
    }
    for(let i=0; i<t.length; i++){
        if(map.get(t[i])===undefined||map.get(t[i])===0){
           answer++;
           }else{
            map.set(t[i],map.get(t[i])-1);
        }
    }
    for(let value of map.values()){
        answer+=value;
    }
    return answer;
};