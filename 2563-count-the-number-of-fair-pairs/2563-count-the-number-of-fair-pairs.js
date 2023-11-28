/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function(nums, lower, upper) {
    function count(val){
        let res=0;
        let j=nums.length-1;
        for(let i=0; i<j; i++){
            while(nums[i]+nums[j]>val&&j>i){
                j--;
            }
            res+=j-i;
        }
        return res;
    }
    nums.sort((a,b)=>a-b);
    return count(upper)-count(lower-1);
};