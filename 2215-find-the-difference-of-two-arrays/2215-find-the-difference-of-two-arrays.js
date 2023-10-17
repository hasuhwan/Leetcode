/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const map1=new Map();
    const map2=new Map();
    nums1.forEach(num=>{
        if(!map1.has(num)){
            map1.set(num,1);
        }
    });
    nums2.forEach(num=>{
       if(!map2.has(num)){
            map2.set(num,1);
        }
    });
    for(let k of map2.keys()){
        if(map1.has(k)){
            map1.delete(k);
            map2.delete(k);
        }
    }
    return [[...map1.keys()],[...map2.keys()]];
};