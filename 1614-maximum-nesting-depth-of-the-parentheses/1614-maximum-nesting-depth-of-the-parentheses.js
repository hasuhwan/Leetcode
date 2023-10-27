/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let answer=0;
    let count=0;
    for(let i=0; i<s.length; i++){
        if(s[i]==="("){
            count++;
            answer=Math.max(answer,count);
        }else if(s[i]===")"){
            count--;
        }
    }
    return answer;
};