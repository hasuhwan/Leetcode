/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let answer=""
    const map=new Map();
    for(let i=0; i<s.length; i++){
        map.set(s[i],(map.get(s[i])||0)+1);
    }
    for(let i=0; i<order.length; i++){
        if(map.has(order[i])){
            answer+=order[i].repeat(map.get(order[i]));
            map.delete(order[i]);
        }
    }
    for(let [key,count] of map.entries()){
        answer+=key.repeat(count);
    }
    return answer;
    
};