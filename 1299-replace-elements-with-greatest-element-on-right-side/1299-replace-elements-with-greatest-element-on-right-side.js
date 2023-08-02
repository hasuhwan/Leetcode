/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    const answer=[...arr];
    answer[answer.length-1]=-1;
    
    for(let i=answer.length-2; i>=0; i--){
        answer[i]=Math.max(arr[i+1],answer[i+1]);
    }
    return answer;
};