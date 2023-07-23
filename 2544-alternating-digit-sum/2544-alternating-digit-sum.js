/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    const temp=String(n).split("");
    let answer=0;
    
    temp.forEach((el,idx)=>{
        if(idx%2===0){
            answer+=Number(el);
        }else{
            answer+=-Number(el);
        }
    });
    return answer;
};