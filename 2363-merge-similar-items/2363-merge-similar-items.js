/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    const map=new Map(items1);
    items2.forEach(([key,value])=>{
        map.set(key,(map.get(key)||0)+value);
    });
    return [...map.entries()].sort((a,b)=>a[0]-b[0]);
};