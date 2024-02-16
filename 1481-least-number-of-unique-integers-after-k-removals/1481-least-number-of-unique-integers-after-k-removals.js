/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const map=new Map();
    arr.forEach(num=>{
        map.set(num,(map.get(num)||0)+1);
    });
    const sorted=[...map.values()].sort((a,b)=>a-b);
    let sum=0;
    for(let i=0; i<sorted.length; i++){
        sum+=sorted[i];
        if(sum>k){
            return sorted.length-i;
        }
    }
    return 0;
};