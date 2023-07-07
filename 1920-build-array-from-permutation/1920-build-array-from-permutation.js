/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const answer=[];
    nums.forEach((num)=>{
        answer.push(nums[num]);
    })
    return answer;
};