/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
    const arr=[logs[0]];
    for(let i=1; i<logs.length; i++){
        arr.push([logs[i][0],logs[i][1]-logs[i-1][1]]);
    }
    let max=0;
    let i=-1;
    arr.forEach(([idx,val])=>{
        if(max<val){
            max=val;
            i=idx;
        }else if(max===val){
            i=Math.min(i,idx);
        }
    });
    return i;
};