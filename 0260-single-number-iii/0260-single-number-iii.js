/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    const map=new Map();
    const answer=[];
    nums.forEach(el=>{
        if(map.has(el)){
            map.set(el,2);
        }else{
            map.set(el,1);
        }
    })
    for(let num of map){
        if(num[1]===1){
            answer.push(num[0]);
        }
    }
    return answer;
};