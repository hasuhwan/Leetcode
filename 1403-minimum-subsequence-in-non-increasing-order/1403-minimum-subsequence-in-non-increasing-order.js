/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    const answer=[];
    let total=nums.sort((a,b)=>b-a).reduce((acc,cur)=>acc+cur,0);
    let sum=0;
    for(let i=0; i<nums.length; i++){
        answer.push(nums[i]);
        sum+=nums[i];
        total-=nums[i];
        if(sum>total){
            return answer;
        }
    }
    return answer;
    
};