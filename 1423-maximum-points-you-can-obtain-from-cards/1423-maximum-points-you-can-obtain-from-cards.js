/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    const len=cardPoints.length;
    if(len===k){
        return cardPoints.reduce((acc,cur)=>acc+cur,0);
    }
    let sum=0;
    for(let i=0; i<k; i++){
        sum+=cardPoints[i];
    }
    let answer=sum;
    for(let i=len-1; i>=len-k; i--){
        sum+=cardPoints[i]-cardPoints[i-len+k];
        answer=Math.max(answer,sum);
    }
    return answer;
};