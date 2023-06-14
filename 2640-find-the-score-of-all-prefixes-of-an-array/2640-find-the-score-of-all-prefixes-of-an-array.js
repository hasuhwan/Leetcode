/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPrefixScore = function(nums) {
    const answer=[];
    let sum=0;
    let max=0;
    nums.forEach((num,idx)=>{
        max=Math.max(num,max);
        const temp=num+max;
        answer.push(temp+sum);
        sum+=temp;
    });
    return answer;
};