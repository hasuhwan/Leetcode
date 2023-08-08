/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
    const answer=[];
    const lenArr=grid.map(el=>{
        return el.map(val=>String(val).length);
    });
    for(let i=0; i<lenArr[0].length; i++){
        let max=0;
        for(let j=0; j<lenArr.length; j++){
            max=Math.max(max,lenArr[j][i]);
        };
        answer.push(max);
    }
    return answer;
};