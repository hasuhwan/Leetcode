/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const answer=[];
    nums.sort((a,b)=>a-b);
    while(nums.length!==0){
    let left=0;
    let right=nums.length-1;
    let mid=Math.ceil((left+right)/2);
    let target=nums[0];
    while(left<mid){
        if(nums[mid]===target){
            left=mid;
        }else{
            right=mid-1;
        }
        mid=Math.ceil((left+right)/2);
    }
    answer.push([target,left+1]);
    nums=nums.slice(left+1);
    }
console.log(answer);
   return answer.sort((a,b)=>b[1]-a[1]).map(el=>el[0]).slice(0,k);
};