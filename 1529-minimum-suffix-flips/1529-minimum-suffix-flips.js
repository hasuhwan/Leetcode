/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function(target) {
    let answer=0;
    let isOne=false;
    
    for(let i=0; i<target.length; i++){
        const temp=target[i];
        if(temp==="0"&&!isOne||temp==="1"&&isOne){
            continue;
        }
        isOne=!isOne;
        answer++;
    }
    return answer;
};