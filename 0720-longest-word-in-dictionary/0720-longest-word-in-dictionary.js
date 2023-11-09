/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    const map=new Map([["",true]]);

    const sorted=words.sort((a,b)=>{
        if(a.length===b.length){
            return a>b?1:-1;
        }else{
            return a.length-b.length;
        }
    });
    let answer="";
    sorted.forEach(str=>{
        if(map.has(str.slice(0,str.length-1))){
            map.set(str,true);
            answer=str.length>answer.length?str:answer;
        }
    });
    return answer;
};