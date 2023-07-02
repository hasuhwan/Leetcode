/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    const arr=[];
    const answer=new Array(s.length).fill(Infinity);
    for(let i=0; i<s.length; i++){
        if(s[i]===c){
            arr.push(i);
        }
    }
    for(let i=0; i<answer.length; i++){
        arr.forEach(el=>{
            answer[i]=Math.min(answer[i],Math.abs(el-i));
        })
    }
    return answer;
};