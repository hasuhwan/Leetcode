/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    nums.sort((a,b)=>a-b);
    function gcd(a,b){
        while(a!==0){
              const temp=b%a;
              b=a;
              a=temp;
              }
        return b;
    }
    return gcd(nums[0],nums[nums.length-1]);
};