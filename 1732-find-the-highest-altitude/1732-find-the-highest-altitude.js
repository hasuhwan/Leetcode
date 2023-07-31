/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let answer=0;
    gain.reduce((acc,cur)=>{
        const temp=acc+cur;
        answer=Math.max(answer,temp);
        return temp;
    },0);
    return answer;
};