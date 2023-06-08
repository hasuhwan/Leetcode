/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let plus=0;
    let minus=0;
    nums.forEach(num=>{
        if(num<0){
            minus++;
        }else if(num>0){
            plus++;
        }
    })
    return Math.max(plus,minus);
};