/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const len=nums.length;
    const left=new Array(len).fill(0);
    const right=new Array(len).fill(0);
    
    for(let i=1; i<len; i++){
        left[i]=left[i-1]+nums[i-1];
    }
    for(let i=len-2; i>=0; i--){
        right[i]=right[i+1]+nums[i+1];
    }
    for(let i=0; i<len; i++){
        if(left[i]===right[i]){
            return i;
        }
    }
    return -1;
    
};