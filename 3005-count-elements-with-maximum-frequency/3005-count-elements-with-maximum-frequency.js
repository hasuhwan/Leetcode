/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let answer=0;
    const map=new Map();
    nums.forEach(num=>{
        map.set(num,(map.get(num)||0)+1);
    });
    const values=[...map.values()];
    const max=Math.max(...values);
    return values.reduce((acc,cur)=>{
       if(cur===max){
           return acc+cur;
       } 
        return acc;
    },0);
    
};