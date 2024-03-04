/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    const sorting=[...new Set(s.split("").sort())];
    const iStr=sorting.join("");
    const dStr=sorting.reverse().join("");
    const map=new Map();
    for(let char of s){
        map.set(char,(map.get(char)||0)+1);
    }
    let answer="";
    let increase=true;
    function addChar(str){
         for(let i=0; i<str.length; i++){
                const char=str[i];
                if(!map.has(char)){
                    continue;
                }
                const count=map.get(char);
                answer+=char;
                if(count===1){
                    map.delete(char);
                }else{
                    map.set(char,count-1);
                }
            }
    }
    while(map.size!==0){
        if(increase){
           addChar(iStr);
        }else{
            addChar(dStr);
        }
        increase=!increase;
    }
    return answer;
};