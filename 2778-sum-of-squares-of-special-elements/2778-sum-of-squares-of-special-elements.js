/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    const len=nums.length;
    let answer=0;
    for(let i=0; i<=Math.sqrt(len,2); i++){
        if(len%i===0){
            
            const j=len/i;
            if(i===j){
                answer+=Math.pow(nums[i-1],2);
            }else{
                answer+=Math.pow(nums[i-1],2)+Math.pow(nums[j-1],2);
            }
        }
    }
    return answer;
};