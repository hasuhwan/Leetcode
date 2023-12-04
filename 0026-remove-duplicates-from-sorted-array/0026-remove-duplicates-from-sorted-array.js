/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const map=new Map();
    
    for(let i=0; i<nums.length; i++){
        if(!map.has(nums[i])){
            map.set(nums[i],true);
        }else{
            nums.splice(i,1);
            i--;
        }
    }
};