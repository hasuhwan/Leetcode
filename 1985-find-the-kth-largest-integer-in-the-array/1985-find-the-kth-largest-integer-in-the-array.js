/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
    nums.sort((a,b)=>{
        if(a.length>b.length){
            return -1;
        }else if(a.length<b.length){
            return 1;
        }else{
            let idx=0;
            while(idx<a.length){
                const tempA=Number(a[idx]);
                const tempB=Number(b[idx]);
                if(tempA>tempB){
                    return -1;
                }else if(tempA<tempB){
                    return 1;
                }else{
                    idx++;
                }
            }
            return 1;
        }
    })
    return nums[k-1];
};