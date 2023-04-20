/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const answer=[];
    intervals.sort((a,b)=>a[0]-b[0]);
    let [one,two]=intervals.shift();
    for(let i=0; i<intervals.length; i++){
        const [nextOne,nextTwo]=intervals[i];
        if(nextOne<=two){
            two=two<nextTwo?nextTwo:two;
        }else{
            answer.push([one,two]);
            one=nextOne;
            two=nextTwo;
        }
    }
    answer.push([one,two]);
    return answer;
};