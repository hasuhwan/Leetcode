/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
  let answer=0;
    for(let i=0; i<n/2; i++){
        answer+=(n-((2*i)+1));
    }
    return answer;
};