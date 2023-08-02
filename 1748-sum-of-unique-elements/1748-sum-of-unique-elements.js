/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const map=new Map();
    nums.forEach((el)=>{
        if(map.has(el)){
            map.set(el,map.get(el)+1);
        }else{
            map.set(el,1);
        }
    });
let answer=0;
    for(let [val,cnt] of map.entries()){
        if(cnt===1){
            answer+=val;
        }
    }
    return answer;
};