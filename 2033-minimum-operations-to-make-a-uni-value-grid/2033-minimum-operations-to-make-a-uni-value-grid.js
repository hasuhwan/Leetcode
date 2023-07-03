/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function(grid, x) {
    grid=grid.flat().sort((a,b)=>a-b);
    const mid=Math.floor(grid.length/2);
    let answer=0;
    for(let i=0; i<grid.length; i++){
        const temp=Math.abs(grid[mid]-grid[i]);
        if(temp%x!==0){
            return -1;
        }
        answer+=temp/x;
    }
    return answer;
};