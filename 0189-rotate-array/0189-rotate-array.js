/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const mod=k%nums.length;;
    const tail=nums.splice(nums.length-mod);
    nums.splice(0,0,...tail);
};


