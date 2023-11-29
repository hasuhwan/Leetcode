/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    const map=new Map();
    const answer=[0,0];
    nums.forEach(num=>{
        map.set(num,(map.get(num)||0)+1);
    });
    for(let [num,val] of map.entries()){
        if(val%2===0){
            answer[0]+=val/2;
        }else{
            answer[0]+=Math.floor(val/2);
            answer[1]++;
        }
    }
    return answer;
};