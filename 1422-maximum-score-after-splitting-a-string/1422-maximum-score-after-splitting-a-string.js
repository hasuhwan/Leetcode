/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let answer=0;
    const total=s.replace(/0/g,"").length;
    let left=0;
    let right=total;
    for(let i=0; i<s.length-1; i++){
        if(s[i]==="0"){
            left++;
        }else{
            right--;
        }
        answer=Math.max(answer,left+right);
    }
    return answer;
};