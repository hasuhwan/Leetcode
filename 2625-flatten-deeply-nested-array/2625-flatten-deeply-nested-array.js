/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const answer=[];
    function flat(temp,count){
        if(count===n){
            answer.push(temp);
            return;
        }
        temp.forEach(el=>{
            if(Array.isArray(el)){
                flat(el,count+1);
            }else{
                answer.push(el);
            }
        })
    }
    arr.forEach(el=>{
       if(Array.isArray(el)){
                flat(el,0);
            }else{
                answer.push(el);
            }
    });
    return answer;
};