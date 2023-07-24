/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let answer=0;
    operations.forEach((el)=>{
        if(el.includes("-")){
            answer--;
        }else{
            answer++;
        }
    });
    return answer;
    
};