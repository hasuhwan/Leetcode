/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function(s) {
    let zero=0;
    let one=0;
    let answer=0;
    
    for(let str of s){
        if(str==="0"){
            if(one!==0){
                one=0;
                zero=0;
            }
            zero++;
        }else{
            one++;
            answer=Math.max(answer,2*Math.min(zero,one));
        }
    }
    return answer;
};