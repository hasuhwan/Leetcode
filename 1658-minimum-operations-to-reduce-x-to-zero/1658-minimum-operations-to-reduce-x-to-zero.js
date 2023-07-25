/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    let answer=Infinity;
    const des=nums.reduce((acc,cur)=>acc+cur,0)-x;
    const len=nums.length;
    if(des<0){
        return -1;
    }
    if(des===0){
        return len;
    }
    let left=0;
    let sum=0;
    for(let i=0; i<len; i++){
        sum+=nums[i];
        while(sum>des){
            sum-=nums[left++];
        }
        if(sum===des){
            answer=Math.min(answer,len-(i-left+1));
        }
    }
    return answer===Infinity?-1:answer;
    
};