/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const sortedArr=nums1.concat(nums2).sort((a,b)=>a-b);
    const length = sortedArr.length;
  const mid = Math.floor(length / 2);

  if (length % 2 !== 0) {
    return sortedArr[mid];
  } else {
    return (sortedArr[mid] + sortedArr[mid - 1]) / 2;
  }
};