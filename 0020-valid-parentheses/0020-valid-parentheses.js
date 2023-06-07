/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const obj={
        ")":"(",
        "}":"{",
        "]":"["
    };
    const stack=[];
    let count=0;
    for(let i=0; i<s.length; i++){
        if(obj[s[i]]){
            if(stack[stack.length-1]===obj[s[i]]){
                stack.pop();
            count--;
            }else{
                return false;
            }
            
        }else{
            stack.push(s[i]);
            count++;
        }
    }
    if(stack.length===0&&count===0){
        return true;
    }
    return false;
};