/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    let answer=Infinity;
    const timeArr=timePoints.map(el=>{
        const [h,m]=el.split(":");
        return Number(h)*60+Number(m);
    }).sort((a,b)=>a-b);
    for(let i=1; i<timeArr.length; i++){
        answer=Math.min(answer,timeArr[i]-timeArr[i-1]);
    }
    return Math.min(answer,timeArr[0]-timeArr[timeArr.length-1]+24*60);
};