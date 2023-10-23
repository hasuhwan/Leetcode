/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let answer=0;
    const sorted=[...heights].sort((a,b)=>a-b);
    heights.forEach((el,idx)=>{
        if(el!==sorted[idx]){
            answer++;
        }
    });
    return answer;
};