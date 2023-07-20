/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    const max=Math.max(...nums);
    const min=Math.min(...nums);
    return nums.filter(el=>el!==max&&el!==min).length;
};