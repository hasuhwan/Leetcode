/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length===0){
        return 0;
    }
    let answer=0;
    nums=[...new Set(nums.sort((a,b)=>a-b))];
    let count=1;
    for(let i=1; i<nums.length; i++){
        if(nums[i]===nums[i-1]+1){
            count++;
        }else{
            answer=Math.max(count,answer);
            count=1;
        }
    }
    return Math.max(answer,count);
};