/**
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
var relocateMarbles = function(nums, moveFrom, moveTo) {
    const map=new Map();
    nums.forEach((num,idx)=>{
        if(!map.has(num)){
            map.set(num,true);
        }
    });
    for(let i=0; i<moveFrom.length; i++){
        const [from,to]=[moveFrom[i],moveTo[i]];
        map.delete(from);
        map.set(to,true);
    }
    return [...map.keys()].sort((a,b)=>a-b);
};