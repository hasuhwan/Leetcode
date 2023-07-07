/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const one=[]
    for(let i=0; i<boxes.length; i++){
        if(boxes[i]==="1"){
            one.push(i);
        }
    }
    const answer=[];
    for(let i=0; i<boxes.length; i++){
        const temp=one.reduce((acc,cur)=>acc+Math.abs(cur-i),0);
        answer.push(temp);
    }
    return answer;
};