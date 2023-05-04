/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let answer=Infinity;
    let temp=0;
    nums.sort((a,b)=>a-b);
    for(let i=0; i<nums.length-2; i++){
        let left=i+1;
        let right=nums.length-1;
        while(left<right){
            const sum=nums[i]+nums[left]+nums[right];
            if(sum===target){
                return target;
            }
            if(answer>Math.abs(sum-target)){
                answer=Math.abs(sum-target);
                temp=sum;
            }
            if(sum>target){
                right--;
            }else{
                left++;
            }
        }
    }
    return temp;
};