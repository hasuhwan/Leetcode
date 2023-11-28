/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    const answer=[];
    nums.sort((a,b)=>a-b).forEach((el,idx)=>{
        if(el===target){
            answer.push(idx);
        }
    });
    return answer;
};