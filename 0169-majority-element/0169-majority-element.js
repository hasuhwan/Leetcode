/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map=new Map();
    const min=Math.ceil(nums.length/2);
    
    for(let num of nums){
        map.set(num,(map.get(num)||0)+1);
        if(map.get(num)===min){
            return num;
        }
    }
};