/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const answer=[];
    const map=new Map();
    nums.forEach(arr=>{
        arr.forEach(el=>{
            if(map.has(el)){
                map.set(el,map.get(el)+1);
            }else{
                map.set(el,1);
            }
        })
    });
    for(let entry of map.entries()){
        const [num,val]=entry;
        if(val===nums.length){
            answer.push(num);
        }
    };
    return answer.sort((a,b)=>a-b);
};