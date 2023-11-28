/**
 * @param {string} s
 * @return {number}
 */
var minimumCost = function(s) {
    let answer=0;
    const len=s.length;
    for(let i=1; i<len; i++){
        if(s[i-1]!==s[i]){
            answer+=Math.min(i,len-i);
        }
    }
    return answer;
};