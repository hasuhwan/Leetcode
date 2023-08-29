/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a,b)=>a-b);
    
    let prev=nums[0];
    let count=1;
    
    for(let i=1; i<nums.length; i++){
        if(nums[i]!==prev){
            if(count===1){
                return prev;
            }else{
                prev=nums[i];
                count=1;
            }
        }else{
            count++;
        }
    }
    return nums[nums.length-1];
};