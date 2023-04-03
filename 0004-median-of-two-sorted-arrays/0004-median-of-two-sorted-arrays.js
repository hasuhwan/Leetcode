/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mergeArr=nums1.concat(nums2);
    
    function quickSort(arr){
        const left=[];
        const right=[];
        if(arr.length<=1){
            return arr;
        }
        const mid=Math.floor(arr.length/2);
        const midArr=arr.splice(mid,1);
        
        for(let i=0; i<arr.length; i++){
            if(arr[i]<midArr[0]){
                left.push(arr[i]);
            }else if(arr[i]>midArr[0]){
                right.push(arr[i]);
            }else{
                midArr.push(arr[i]);
            }
        }
        
        return quickSort(left).concat(midArr,quickSort(right));
    }
    const sortedArr=quickSort(mergeArr);
    
    const length=sortedArr.length;
    const mid=Math.floor(length/2);
    console.log(sortedArr);
    if(length%2!==0){
        return sortedArr[mid];
    }else{
        return (sortedArr[mid]+sortedArr[mid-1])/2;
    }
};