/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
      const arr=new Array(rowIndex+1).fill(0).map((_,idx)=>new Array(idx+1).fill(1));
    for(let i=1; i<arr.length; i++){
        const temp=arr[i];
        for(let j=1; j<temp.length-1; j++){
            temp[j]=arr[i-1][j-1]+arr[i-1][j];
        }
    }
    return arr[rowIndex];
};