/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    const m=mat.length;
    const n=mat[0].length;
    const map=new Map();
    const rowMap=new Map();
    const colMap=new Map();
    for(let i=0; i<m; i++){
        if(!rowMap.has(i)){
                rowMap.set(i,new Set());
            }
        for(let j=0; j<n; j++){
            const num=mat[i][j];
            map.set(num,[i,j]);
            if(!colMap.has(j)){
                colMap.set(j,new Set());
            }
            rowMap.get(i).add(num);
            colMap.get(j).add(num);
        }
    }
    for(let idx=0; idx<arr.length; idx++){
        const tar=arr[idx];
         const [i,j]=map.get(tar);
        rowMap.get(i).delete(tar);
        colMap.get(j).delete(tar);
        if(rowMap.get(i).size===0||colMap.get(j).size===0){
            return idx;
        }
    }
};