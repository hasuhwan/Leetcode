/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let answer=0;
    const stack=[];
    const str=s.replace(/\){2}/g,"*");
    for(let i=0; i<str.length; i++){
        if(str[i]==="("){
            stack.push("(");
        }else{
            let add=0;
            if(stack.length===0){
                add++;
            }else{
                stack.pop();
                
            }
            if(str[i]===")"){
                    add++;
                }
            answer+=add;
        }
    }
    if(stack.length!==0){
        answer+=stack.length*2;
    }
    return answer;
};