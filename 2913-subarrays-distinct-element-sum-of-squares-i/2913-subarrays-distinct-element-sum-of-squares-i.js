/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    let answer=0;
    for(let i=0; i<nums.length; i++){
        const set=new Set();
        for(let j=i; j<nums.length; j++){
            set.add(nums[j]);
            answer+=set.size**2;
        }
    }
    return answer;
};