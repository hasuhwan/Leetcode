/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let answer=0;
    let right=0;
    let left=0;
    for(let i=0; i<s.length; i++){
        if(s[i]==="R"){
            right++;
        }else{
            left++;
        }
        if(right===left){
            answer++;
        }
    };
    return answer;
};