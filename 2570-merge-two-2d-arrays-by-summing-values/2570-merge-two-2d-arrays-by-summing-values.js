/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    const map=new Map();
    function set(nums){
        nums.forEach(([key,val])=>{
            map.set(key,(map.get(key)||0)+val);
        });
    }
    set(nums1);
    set(nums2);
    return [...map.entries()].sort((a,b)=>a[0]-b[0]);
};