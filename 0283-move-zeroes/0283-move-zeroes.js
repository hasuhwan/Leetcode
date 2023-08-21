/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const len=nums.length;
    let count=0;
    let idx=0;
    while(count<len){
        if(nums[idx]!==0){
            idx++;
        }else{
            nums.push(nums.splice(idx,1));
        }
        count++;
    }
};