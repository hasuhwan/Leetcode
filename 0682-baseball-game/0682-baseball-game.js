/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const answer=[];
    operations=operations.map(el=>{
        if(!isNaN(el)){
            return Number(el);
        }
        return el;
    })
    operations.forEach(el=>{
        if(el==="C"){
            answer.pop();
        }else if(el==="D"){
            answer.push(answer[answer.length-1]*2);
        }else if(el==="+"){
            const temp=answer.slice(-2)
            answer.push(temp.reduce((acc,cur)=>acc+cur,0));
        }else{
            answer.push(el);
        }
    });
    return answer.reduce((acc,cur)=>acc+cur,0);
};