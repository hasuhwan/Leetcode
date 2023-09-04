/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function(target, maxDoubles) {
    let answer=0;
    while(target>1){
        if(target%2===0&&maxDoubles!==0){
            target=target/2;
            maxDoubles--;
            
        }else if(maxDoubles===0){
            return answer+target-1;
        }else{
            target--;
        }
        answer++;
    }
    return answer;
};