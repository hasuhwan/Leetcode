/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    const answer=[];
    const preSet=new Set();
    const sufMap=new Map();
    nums.forEach(num=>{
        sufMap.set(num,(sufMap.get(num)||0)+1);
    });
    
    nums.forEach(num=>{
        preSet.add(num);
        const val=sufMap.get(num);
        if(val===1){
            sufMap.delete(num);
        }else{
            sufMap.set(num,val-1);
        }
        answer.push(preSet.size-sufMap.size);
    })
    return answer;
    
};