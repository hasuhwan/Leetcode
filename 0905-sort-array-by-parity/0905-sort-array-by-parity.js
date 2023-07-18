/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    const odd=[];
    const even=[];
    nums.forEach((nums)=>{
        if(nums%2===0){
            even.push(nums);
        }else{
            odd.push(nums);
        }
    });
    return even.concat(odd);
};