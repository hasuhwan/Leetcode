/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
    const answer=new Array(102).fill(0);
    nums.forEach(([start,end])=>{
        answer[start]++;
        answer[end+1]--;
    });
    
    for(let i=1; i<answer.length; i++){
        answer[i]+=answer[i-1];
    }
    
    return answer.filter(num=>num!==0).length;
};