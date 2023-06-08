/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    return grid.flat().reduce((acc,cur)=>{
        if(cur<0){
            return acc+1;
        }else{
            return acc;
        }
    },0);
};