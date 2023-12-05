/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map=new Map();
    for(let i=0; i<nums.length; i++){
        const num=nums[i];
         if(!map.has(num)){
            map.set(num,[]);
        }
        const curr=map.get(num);
        if(curr.length>=1){
            for(let idx of curr){
                if(i-idx<=k){
                    return true;
                }
            }
        }
        curr.push(i);
    }

    return false;
};