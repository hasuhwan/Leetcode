/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let answer=-1;
    let max=0;
    nums.sort((a,b)=>a-b);
    const map=new Map();
    nums.forEach(num=>{
        if(num%2===0){
            map.set(num,(map.get(num)||0)+1);
        }
    });
    for(let [key,value] of map.entries()){
        if(max<value){
            answer=key;
            max=value;
        }
    }
    return answer;
};