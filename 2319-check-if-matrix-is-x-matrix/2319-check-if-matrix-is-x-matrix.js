/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
    const len=grid.length;
    return !grid.some((arr,i)=>{
        return arr.some((num,j)=>{
            if(i-j===0||i+j===len-1){
                if(num===0){
                    return true;
                }else{
                    return false;
                }
                
            }
            if(num!==0){
                return true;
            }
            return false;
        })
    });
};

