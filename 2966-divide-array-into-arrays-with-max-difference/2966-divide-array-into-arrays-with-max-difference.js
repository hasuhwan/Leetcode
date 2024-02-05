/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    nums.sort((a,b)=>a-b);
    const arr=[];
    for(let i=0; i<nums.length; i+=3){
        arr.push(nums.slice(i,i+3));
    }
    if(arr.every(n=>{
        if(n[2]-n[0]>k){
            return false;
        }
        return true;
    })){
        return arr;
    }
    return [];
};