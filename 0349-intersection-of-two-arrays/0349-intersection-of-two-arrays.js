/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const answer=[];
    const set1=new Set(nums1);
    const set2=new Set(nums2);
    for(let num of set2){
        if(set1.has(num)){
            answer.push(num);
        }
    }
    return answer;
    
};