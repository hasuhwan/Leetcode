/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let answer=0;
    const map=new Map();
    
    nums.forEach((num)=>{
        map.set(num,(map.get(num)||0)+1);
    });
    
    for(let val of map.values()){
        if(val===1){
            return -1;
        }
        answer+=Math.ceil(val/3);
    }
    return answer;
};