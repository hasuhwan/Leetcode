/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const arr=[...nums];
    nums.sort((a,b)=>a-b);
    const answer=[];
    arr.forEach(el=>{
        answer.push(nums.indexOf(el));
    })
    return answer;
};