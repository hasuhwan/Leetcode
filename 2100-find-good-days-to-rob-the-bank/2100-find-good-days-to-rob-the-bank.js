/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function(security, time) {
    const answer=[];
    const len=security.length;
    const left=new Array(len).fill(0);
    const right=new Array(len).fill(0);
    
    for(let i=1; i<len; i++){
        if(security[i]<=security[i-1]){
            left[i]=left[i-1]+1;
        }
    }
    for(let i=len-2; i>=0; i--){
        if(security[i]<=security[i+1]){
            right[i]=right[i+1]+1;
        }
    }
    
    for(let i=0; i<len; i++){
        if(left[i]>=time&&right[i]>=time){
            answer.push(i);
        }
    }
    return answer;
    
};