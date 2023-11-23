/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    const map=new Map();
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<nums[i].length; j++){
            const idxSum=i+j;
            if(!map.has(idxSum)){
                map.set(idxSum,[]);
            }
            map.get(idxSum).unshift(nums[i][j]);
        }
    }
    return [...map.values()].flat();
    
};