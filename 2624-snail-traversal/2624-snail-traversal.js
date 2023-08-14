/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    
    if(this.length!==rowsCount*colsCount){
        return [];
    }
    const answer=new Array(rowsCount).fill(0).map(()=>new Array(colsCount).fill(0));
    let idx=0;
    for(let i=0; i<colsCount; i++){
        for(let j=0; j<rowsCount; j++){
            if(i%2===0){
                answer[j][i]=this[idx];
            }else{
                answer[rowsCount-1-j][i]=this[idx];
            }
            
            idx++;
        }
    }
    
    return answer;
    
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */