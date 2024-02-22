/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    const n=matrix.length;
    const rowMap=new Map();
    const colMap=new Map();
    for(let i=0; i<n; i++){
        if(!rowMap.has(i)){
            rowMap.set(i,new Set());
        }
        for(let j=0; j<n; j++){
            const num=matrix[i][j];
            if(!colMap.has(j)){
                colMap.set(j,new Set());
            }
            rowMap.get(i).add(num);
            colMap.get(j).add(num);
        }
    }
    for(let value of rowMap.values()){
        if(value.size!==n){
            return false;
        }
    }
    for(let value of colMap.values()){
        if(value.size!==n){
            return false;
        }
    }
    
    return true;
};