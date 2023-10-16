/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const answer=[];
    let temp=[];
    arr.forEach((el)=>{
      temp.push(el);
        if(temp.length===size){
            answer.push(temp);
            temp=[];
        }
    });
    if(temp.length!==0){
        answer.push(temp);
    }
    
    return answer;
};
