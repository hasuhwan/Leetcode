/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let max=-1;
    const map=new Map();
    arr.forEach((num)=>{
        map.set(num,(map.get(num)||0)+1);
    });
    
    for(let [key,value] of map.entries()){
        if(key===value&&max<value){
            max=value;
        }
    }
    return max;
};