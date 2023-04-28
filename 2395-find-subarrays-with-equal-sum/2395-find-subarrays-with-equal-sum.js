/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    const map=new Map();
    for(let i=0; i<nums.length-1; i++){
        const temp=nums[i]+nums[i+1];
        if(!map.get(temp)){
            map.set(temp,1);
        }else{
            return true;
        }
    }
    return false;
};