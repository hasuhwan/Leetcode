/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    const len=nums.length;
    const left=new Array(len).fill(0);
    const right=new Array(len).fill(0);
    const answer=new Array(len).fill(0);
    
    for(let i=1; i<len; i++){
        left[i]=left[i-1]+nums[i-1];
    }
    for(let i=nums.length-2; i>=0; i--){
        right[i]=right[i+1]+nums[i+1];
    }
    left.forEach((el,idx)=>{
        answer[idx]=Math.abs(el-right[idx]);
    });
    return answer;
};