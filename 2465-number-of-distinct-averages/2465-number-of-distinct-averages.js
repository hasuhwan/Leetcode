/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    nums.sort((a,b)=>b-a);
    let answer=0;
    let temp=0;
    let left=0;
    let right=nums.length-1;
    const set=new Set();
    while(left<right){
        const temp=(nums[left]+nums[right])/2;
       set.add(temp);
        left++;
        right--;
    };
    return set.size;
    
    
};