/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const answer=[];
    let prev=1;
    for(let i=0; i<nums.length; i++){
        answer[i]=prev;
        prev*=nums[i];
    }
    prev=1;
    for(let j=nums.length-1; j>=0; j--){
        answer[j]*=prev;
        prev*=nums[j];
    }
    return answer;
};