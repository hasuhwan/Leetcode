/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const arr=new Array(nums.length+1).fill(false);
    arr[0]=true;
    const map=new Map();
    nums.forEach((num)=>{
        arr[num]=true;
        map.set(num,(map.get(num)||0)+1);
    });
    for(let [key,val] of map.entries()){
        if(val===2){
            return [key,arr.indexOf(false)];
        }
    }
};