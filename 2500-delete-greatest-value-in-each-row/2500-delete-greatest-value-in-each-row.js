/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let answer=0;
    function rotateFunc(arr){
        const m=arr.length;
        const n=arr[0].length;
        const newArr=new Array(n).fill().map(()=>new Array(m).fill(0));
        for(let i=0; i<m; i++){
            for(let j=0; j<n; j++){
                newArr[j][m-i-1]=arr[i][j];
            }
        }
        return newArr;
    }
    const rotate=rotateFunc(grid.map(arr=>arr.sort((a,b)=>a-b)));
    rotate.forEach(arr=>{answer+=Math.max(...arr)});
    return answer;
};