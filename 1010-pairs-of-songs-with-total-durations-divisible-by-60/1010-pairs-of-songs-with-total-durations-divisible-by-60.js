/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    const map=new Map();
    let answer=0;
    time.forEach(num=>{
        const mod=num%60;
        const pairNum=mod===0?0:60-mod;
        answer+=map.get(pairNum)||0;
        map.set(mod,(map.get(mod)||0)+1);
    });
    return answer;
};