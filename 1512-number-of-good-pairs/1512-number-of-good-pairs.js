/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let answer=0;
    const map=new Map();
    nums.forEach((num,idx)=>{
        map.set(num,(map.get(num)||[]).concat(idx));
    });
    for(let arr of map.values()){
        if(arr.length>=2){
            answer+=(arr.length*(arr.length-1))/2;
        }
    }
    return answer;
};