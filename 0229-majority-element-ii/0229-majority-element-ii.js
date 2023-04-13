/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const answer=[];
    const map=new Map();
    const times=nums.length/3;
    
    nums.forEach((el)=>{
        if(map.has(el)){
            map.set(el,map.get(el)+1);
        }else{
            map.set(el,1);
        }
    })
    
    for([key,value] of map){
        if(value>times){
            answer.push(key);
        }
    }
    return answer;
};