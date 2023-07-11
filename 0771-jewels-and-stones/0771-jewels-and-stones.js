/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let answer=0;
    const map=new Map();
    for(let i=0; i<jewels.length; i++){
        map.set(jewels[i],1);
    }
    for(let i=0; i<stones.length; i++){
        if(map.has(stones[i])){
            answer++;
        }
    }
    return answer;
};