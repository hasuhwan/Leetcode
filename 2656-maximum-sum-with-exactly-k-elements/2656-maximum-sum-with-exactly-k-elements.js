/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    const max=Math.max(...nums);
    let answer=0;
    for(let i=0; i<k; i++){
        answer+=max+i;
    }
    return answer;
};