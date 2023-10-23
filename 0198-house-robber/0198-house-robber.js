/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const dp=new Array(nums.length).fill(0);
    if(nums.length===1){
        return nums[0];
    }
        
    dp[0]=nums[0];
    dp[1]=Math.max(dp[0],nums[1]);
    for(let i=2; i<dp.length; i++){
        dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i]);
    }
    return dp[dp.length-1];
};