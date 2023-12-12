/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const answer=[];
    let start=-Math.floor(n/2);
    for(let i=0; i<n; i++){
        if(n%2===0&&start===0){
            start++;
        }
        answer.push(start++);
    }
    return answer;
};