/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function(nums, operations) {
    const map=new Map();
nums.forEach((num,idx)=>{
    map.set(num,idx);
})
    operations.forEach(([from,to])=>{
        const idx=map.get(from);
        nums[idx]=to;
        map.set(to,idx);
    });
    return nums;
};