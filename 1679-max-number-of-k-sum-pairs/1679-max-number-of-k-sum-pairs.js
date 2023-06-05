/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let answer=0;
    let left=0;
    let right=nums.length-1;
    nums.sort((a,b)=>a-b);
    while(left<right){
        const temp=nums[left]+nums[right];
        if(temp===k){
            answer++;
            left++;
            right--;
        }else if(temp<k){
            left++;
        }else{
            right--;
        }
    }
    return answer;
};