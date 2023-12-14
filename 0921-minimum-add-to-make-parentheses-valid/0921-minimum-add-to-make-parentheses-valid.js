/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let answer=0;
    let count=0;
    for(let str of s){
        if(str==="("){
            count++;
        }else{
            if(count===0){
                answer++;
            }else{
                count--;
            }
        }
    }
    return answer+count;
};