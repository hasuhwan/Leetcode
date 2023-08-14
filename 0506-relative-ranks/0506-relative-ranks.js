/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const answer=new Array(score.length).fill("");
    score=score.map((el,idx)=>[el,idx]).sort((a,b)=>b[0]-a[0]);
    score.forEach(([val,pos],idx)=>{
        let temp=0;
        if(idx===0){
            temp="Gold Medal";
        }else if(idx===1){
            temp="Silver Medal";
        }else if(idx===2){
            temp="Bronze Medal";
        }else{
            temp=String(idx+1);
        }
        answer[pos]=temp;
    });
    return answer;
};