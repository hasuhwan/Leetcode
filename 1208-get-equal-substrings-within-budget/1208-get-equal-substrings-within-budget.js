/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let answer=0;
    let idx=0;
    for(let i=0; i<s.length; i++){
        maxCost-=Math.abs(s[i].charCodeAt()-t[i].charCodeAt());
        while(maxCost<0&&idx<=i){
            maxCost+=Math.abs(s[idx].charCodeAt()-t[idx].charCodeAt());
            idx++;
        }
        answer=Math.max(answer,i-idx+1);
    }
    return answer;
};