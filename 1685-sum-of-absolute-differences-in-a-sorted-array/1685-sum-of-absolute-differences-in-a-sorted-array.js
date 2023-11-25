/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
    const len=nums.length;
    const answer=[];
    const sum=nums.reduce((acc,cur)=>acc+cur,0);
    let sumL=0;
    let sumR=0;
    for(let i=0; i<len; i++){
        const curr=nums[i];
        sumL+=curr;
        sumR=sum-sumL;
        const left= curr*(i+1)-sumL;
        const right=sumR-curr*(len-(i+1));
        answer.push(left+right);
    }
    return answer;
};
