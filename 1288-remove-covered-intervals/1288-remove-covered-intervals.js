/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    intervals.sort((a,b)=>(a[1]-a[0])-(b[1]-b[0]));
    let answer=intervals.length;
    intervals.forEach(([one,two],idx)=>{
        for(let i=idx+1; i<intervals.length; i++){
            if(intervals[i][0]<=one&&intervals[i][1]>=one &&intervals[i][0]<=two&&intervals[i][1]>=two){
                answer--;
                break;
            }
        }
    })
    return answer;
};