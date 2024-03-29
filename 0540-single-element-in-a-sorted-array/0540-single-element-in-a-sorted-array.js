/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let left=0;
    let right=nums.length-1;
    let mid;
    while(left<=right){
        mid=Math.floor((left+right)/2);
        if(nums[mid]!==nums[mid+1]&&nums[mid]!==nums[mid-1]){
            return nums[mid];
        }
        if((mid%2===0&&nums[mid]===nums[mid+1])||(mid%2!==0&&nums[mid]===nums[mid-1])){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
};