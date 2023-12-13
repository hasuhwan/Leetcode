/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let max=releaseTimes[0];
    let answer=keysPressed[0];
    for(let i=1; i<releaseTimes.length; i++){
        const cur=releaseTimes[i]-releaseTimes[i-1];
        if(cur>max){
            max=cur;
            answer=keysPressed[i];
        }else if(cur===max){
            answer=answer>keysPressed[i]?answer:keysPressed[i];
        }
    }
    return answer;
    
};