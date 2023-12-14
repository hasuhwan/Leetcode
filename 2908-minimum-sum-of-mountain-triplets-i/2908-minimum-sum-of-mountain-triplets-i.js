/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function(nums) {
    let answer=Infinity;
    for(let i=0; i<nums.length-2; i++){
        const one=nums[i];
        for(let j=i+1; j<nums.length-1; j++){
            const two=nums[j];
            if(one>=two){
                continue;
            }
            for(let k=j+1; k<nums.length; k++){
                const three=nums[k];
                if(three<two){
                    answer=Math.min(answer,one+two+three);
                }
            }
        }
    }
    return answer===Infinity?-1:answer;
};