/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let answer=0;
    let i=0;
    while(i<nums.length){
        if(nums[i]===0){
            let j=i;
            while(nums[j]===0&&j<nums.length){
                j++;
            }
            answer+=(j-i)*(j-i+1)/2;
            i=j;
        }
        i++;
    }
    return answer;
};