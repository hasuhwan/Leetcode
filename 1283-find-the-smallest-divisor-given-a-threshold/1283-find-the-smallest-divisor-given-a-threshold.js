/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let left=0;
    let right=Math.pow(10,6);
    let answer=0;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        const total=nums.reduce((acc,cur)=>acc+Math.ceil(cur/mid),0);
        if(total>threshold){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
    return left;
};