/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const answer=[];
    const lenl=String(low).length;
    const lenh=String(high).length;
    const str="123456789";
    for(let i=lenl; i<=lenh; i++){
        for (let j=0;j<10-i;j++){
            let num = parseInt(str.substring(j, j + i));
            if (num >= low && num <= high){
                answer.push(num);
                
            }
            
        }
    }
    return answer;
};