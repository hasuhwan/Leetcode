/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let answer=0;
    const len=nums.length;
    for(let i=0; i<len/2; i++){
        if(i===len-i-1){
            answer+=nums[i];
        }else{
            answer+=Number(String(nums[i])+String(nums[len-1-i]));
        }
    }
    return answer;
};