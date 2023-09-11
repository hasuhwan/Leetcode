/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let answer=0;
    for(let i=0; i<nums.length; i++){
        let temp=nums[i];
        let right=i+1;
        if(temp>=k){
            continue;
        }
        answer++;
        while(right<nums.length&&temp*nums[right]<k){
            temp*=nums[right];
            answer++;
            right++;
        }
    }
    return answer;
    
    
};