/**
 * @param {number[]} nums
 * @return {number}
 */
var findValueOfPartition = function(nums) {
    let answer=Infinity;
    const set=new Set(nums);
    if(nums.length!==set.size){
        return 0;
    }
    nums.sort((a,b)=>a-b);
    for(let i=0; i<nums.length-1; i++){
        answer=Math.min(answer,Math.abs(nums[i]-nums[i+1]));
    }
    return answer;
};