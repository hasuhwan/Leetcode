/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    nums=nums.map((el,idx)=>[el,idx]).sort((a,b)=>a[0]-b[0]);
    let left=0;
    let right=nums.length-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        const [val,idx]=nums[mid];
        if(val===target){
            return nums[mid][1];
        }else if(val<target){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
    return -1;
};