/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    return arr1.sort((a,b)=>{
        const idxA=arr2.indexOf(a);
        const idxB=arr2.indexOf(b);
        if(idxA===-1&&idxB!==-1){
            return 1;
        }else if(idxA!==-1&&idxB===-1){
            return -1;
        }else if(idxA!==-1&&idxB!==-1){
            return idxA>idxB?1:-1;
        }else{
            return a>b?1:-1;
        }
    });
};