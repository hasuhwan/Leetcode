/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
    nums1.sort((a,b)=>a-b);
    nums2.sort((a,b)=>a-b);
    for(let i=0; i<nums1.length; i++){
        if(nums2.includes(nums1[i])){
            return nums1[i];
        }
    }
    return [nums1[0],nums2[0]].sort((a,b)=>a-b).join("");
};