/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function(n) {
    const perm=Array.from({length:n},(_,idx)=>idx);
    let count=1;
    function convert(arr){
        return arr.map((el,idx)=>{
            if(el%2===0){
                return perm[el/2];
            }
            return perm[n/2+(el-1)/2];
        })
    }
    let arr=convert(perm);
    while(!arr.every((el,idx)=>el===idx)){
        arr=convert(arr);
        count++;
    }
    return count;
};