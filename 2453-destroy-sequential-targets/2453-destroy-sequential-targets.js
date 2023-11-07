/**
 * @param {number[]} nums
 * @param {number} space
 * @return {number}
 */
var destroyTargets = function(nums, space) {
    let maxCount=0;
    let minNum=Infinity;
    const map=new Map();
    nums.forEach(num=>{
        const mod=num%space;
        map.set(mod,(map.get(mod)||0)+1);
        maxCount=Math.max(maxCount,map.get(mod));
    });
    nums.forEach(num=>{
        if(map.get(num%space)===maxCount){
            minNum=Math.min(minNum,num);
        }
    })
    return minNum;
    
};