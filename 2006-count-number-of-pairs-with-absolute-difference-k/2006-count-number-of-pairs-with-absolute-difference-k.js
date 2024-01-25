/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let answer=0;
    const map=new Map();
    nums.forEach((num)=>{
        map.set(num,(map.get(num)||0)+1);
    });
    nums.forEach((num)=>{
        const diff=num-k;
        answer+=map.get(diff)||0;
    });
    return answer;
};