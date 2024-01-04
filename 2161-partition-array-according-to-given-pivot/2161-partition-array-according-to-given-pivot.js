/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const left=[];
    const pivotArr=[];
    const right=[];
    nums.forEach(num=>{
        if(num>pivot){
            right.push(num);
        }else if(num<pivot){
            left.push(num);
        }else{
            pivotArr.push(num);
        }
    });
    return left.concat(pivotArr,right);
};