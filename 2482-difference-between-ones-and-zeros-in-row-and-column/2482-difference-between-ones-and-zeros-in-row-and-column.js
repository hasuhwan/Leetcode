/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    const m=grid.length;
    const n=grid[0].length;
    const rotArr=new Array(n).fill(0).map(()=>new Array(m).fill(0));
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            rotArr[j][m-1-i]=grid[i][j];
        }
    }
    const onesRow=[];
    const onesCol=[];
    const zerosRow=[];
    const zerosCol=[];
    function check(el,ones,zeros){
        el.forEach(arr=>{
        let one=0;
        let zero=0;
        arr.forEach(el=>{
            if(el===1){
                one++;
            }else{
                zero++;
            }
        })
        ones.push(one);
        zeros.push(zero);
    })
    }
    check(grid,onesRow,zerosRow);
    check(rotArr,onesCol,zerosCol);
    const answer=new Array(m).fill(0).map(()=>new Array(n).fill(0));
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            answer[i][j]=onesRow[i]+onesCol[j]-zerosRow[i]-zerosCol[j];
        }
    }
    return answer;
    
};