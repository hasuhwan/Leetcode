/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function(finalSum) {
    const answer=[];
    if(finalSum%2!==0){
        return answer;
    }
    for(let i=2; i<=finalSum; i+=2){
        answer.push(i);
        finalSum-=i;
    }
    answer[answer.length-1]+=finalSum;
    return answer;
};