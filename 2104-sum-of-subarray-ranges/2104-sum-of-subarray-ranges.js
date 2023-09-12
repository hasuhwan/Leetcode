/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
    let answer = 0;
    
    for(let i=0;i< nums.length-1; i++){
        let min = nums[i];
        let max = nums[i];
        for(let j=i+1;j< nums.length; j++){
           min = Math.min(min, nums[j]);
           max = Math.max(max, nums[j]);
           answer += max - min;
        }
    }
    return answer;
};