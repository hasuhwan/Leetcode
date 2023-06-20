/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    const answer=new Array(nums.length).fill(-1);
    let sum=0;
    for(let i=0; i<nums.length; i++){
          sum+=nums[i];
        if(i<2*k){
            continue;
        }
        answer[i - k] = Math.floor(sum / (2 * k + 1));
        sum-=nums[i-2*k];
    }
return answer;
};