/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const len=grid.length;
    const split=grid[0].length;
    
    const arr=grid.flat();
    k=k%arr.length;
    const slice=arr.slice(arr.length-k).concat(arr.slice(0,arr.length-k));

    const answer=[];
    for(let i=0; i<len; i++){
        answer.push(slice.slice(i*split,(i+1)*split));
    }
    return answer;
};