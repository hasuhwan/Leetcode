/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    let j=1;

    while(j!==nums.length){
        for(let i=0; i<nums.length-j; i++){
           
            nums[i]=(nums[i]+nums[i+1])%10;
        }
        j++;
    }
   
    return nums[0];
};
