/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const n=grid.length;
    let answer=0;
    const rotatedArr=new Array(n).fill(0).map(()=>new Array(n).fill(0));
    for(let row=0; row<n; row++){
        for(let col=0; col<n; col++){
            rotatedArr[n-1-col][row]=grid[row][col];
        }
    }

    let row=0;
    while(row<n){
        const temp=grid[row];
        for(let i=0; i<n; i++){
            const str=rotatedArr[i];
            const bool=temp.every((el,idx)=>el===str[idx]);
            if(bool){
                answer++;
            }
        }
        row++;
    }
    return answer;
};