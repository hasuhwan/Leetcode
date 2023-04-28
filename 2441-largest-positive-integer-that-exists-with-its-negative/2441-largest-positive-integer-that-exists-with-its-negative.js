/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let minus=[];
    const map=new Map();
    for(let i=0; i<nums.length; i++){
        if(nums[i]>0){
            map.set(nums[i],1);
        }else{
            minus.push(nums[i]);
        }
    }
    minus.sort((a,b)=>a-b);
    for(let i=0; i<minus.length; i++){
        if(map.get(-minus[i])){
            return -minus[i];
        }
    }
    return -1;
};