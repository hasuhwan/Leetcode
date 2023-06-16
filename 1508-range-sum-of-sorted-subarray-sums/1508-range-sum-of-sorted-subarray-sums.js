/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    const arr=[];
   for(let i=0; i<nums.length; i++){
       let sum=0;
       let count=i;
       while(count<nums.length){
           sum+=nums[count];
           arr.push(sum);
           count++;
       }
   }
return (arr.sort((a,b)=>a-b).slice(left-1,right).reduce((acc,cur)=>acc+cur,0))%1000000007
};