/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
    let answer=0;
    let acc=0;
    const map=new Map();
    nums.forEach(num=>{
        map.set(num,(map.get(num)||0)+1);
    });
    const sorted=[...map.entries()].sort((a,b)=>b[0]-a[0]);
    sorted.pop();
    for(let [key,value] of sorted){
        answer+=acc+value;
        acc+=value;
    }
    return answer;
};