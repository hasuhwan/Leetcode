/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let max=0;
    let idx=0;
    mat.forEach((arr,i)=>{
        const count=arr.filter(el=>el===1).length;
        if(count>max){
            max=count;
            idx=i;
        }
    });
    return [idx,max];
};