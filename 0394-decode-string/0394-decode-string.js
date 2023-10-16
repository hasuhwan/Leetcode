/**
 * @param {string} s
 * @return {string}
 */
function match(s){
    const stack=[];
    const obj={};
    for(let i=0; i<s.length; i++){
        if(s[i]==="["){
            stack.push(i);
        }else if(s[i]==="]"){
            obj[stack.pop()]=i;
        }
    }
    return obj;
}
var decodeString = function(s) {
    const couple=match(s);
    function addStr(start,end,rep){
        let answer="";
        let num="";
        for(let i=start; i<end; i++){
            if(s[i]==="["){
                answer+=addStr(i+1,couple[i],Number(num));
                i=couple[i];
                num="";
            }else if(!isNaN(s[i])){
                num+=s[i];
            }else{
                answer+=s[i];
            }
        }
        return answer.repeat(rep);
        
    }
    return addStr(0,s.length,1);
};