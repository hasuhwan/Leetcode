/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    const arr=new Array(501).fill(0);
    nums.forEach(num=>{
        arr[num]++;
    })
    return arr.every(count=>count%2===0);
};