/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let answer=0;
    let sum=nums.reduce((acc,cur)=>acc+cur,0);
    let left=0;
    for(let i=0; i<nums.length-1; i++){
        left+=nums[i];
        sum-=nums[i];
        if(left>=sum){
            answer++;
        }
    }
    return answer;
};