/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let answer=0;
    const obj={};
    nums.forEach((num)=>{
        obj[num]=(obj[num]||0)+1;
    });
    Object.entries(obj).forEach(([key,value])=>{
        if(obj[Number(key)+1]){
            answer=Math.max(answer,value+obj[Number(key)+1]);
        }
    });
    return answer;
};