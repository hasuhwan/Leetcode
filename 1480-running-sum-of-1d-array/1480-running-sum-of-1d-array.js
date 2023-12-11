/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let acc=0;
    return nums.map((num)=>{
        const next=num+acc;
        acc=next;
        return next;
    })
};