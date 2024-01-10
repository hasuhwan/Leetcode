/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const map=new Map();
    arr.forEach(char=>{
        map.set(char,(map.get(char)||0)+1);
    });
    for(let [key,val] of map.entries()){
        if(val>1){
            map.delete(key);
        }
    }
    if(map.size<k){
        return "";
    }
    let idx=1;
    for(let key of map.keys()){
        if(idx===k){
            return key;
        }
        idx++;
    }
};