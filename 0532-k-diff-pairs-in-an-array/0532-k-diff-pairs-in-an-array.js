/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    let answer=0;
    nums.sort((a,b)=>a-b);
    let prev=null;
    
    for(let i=0; i<nums.length-1; i++){
        if(prev!==nums[i]){
            prev=nums[i];
            let prev2=null;
            for(let j=i+1; j<nums.length; j++){
                if(prev2!==nums[j]){
                    prev2=nums[j];
                    if(nums[j]-nums[i]===k){
                        answer++;
                    }else if(nums[j]-nums[i]>k){
                        break;
                    }
                }
            }
        }
    }
    return answer;
};