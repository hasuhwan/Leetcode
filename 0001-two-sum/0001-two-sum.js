/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    nums=nums.map((el,idx)=>[el,idx]).sort((a,b)=>a[0]-b[0]);
    let left=0;
    let right=nums.length-1;
    while(left<right){
        const temp=nums[left][0]+nums[right][0];
        if(temp>target){
            right--;
        }else if(temp<target){
            left++;
        }else{
            return [nums[left][1],nums[right][1]];
        }
    }
};