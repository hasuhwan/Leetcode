/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    const answer=[0,0];
    const map1=new Map();
    const map2=new Map();
    nums1.forEach(num=>{
        map1.set(num,(map1.get(num)||0)+1);
    });
    nums2.forEach(num=>{
        map2.set(num,(map2.get(num)||0)+1);
    });
    for(let [key,val] of map1.entries()){
        if(map2.has(key)){
            answer[0]+=val;
            answer[1]+=map2.get(key);
        }
    }
    return answer;
};