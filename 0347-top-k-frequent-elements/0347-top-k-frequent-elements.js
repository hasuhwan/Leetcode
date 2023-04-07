/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map=new Map();
    
    for(let i=0; i<nums.length; i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1);
        }else{
            map.set(nums[i],1);
        }
    }
const answer=[...map];
    return answer.sort((a,b)=>b[1]-a[1]).map(el=>el[0]).slice(0,k);

};