/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    const stack=[];
    for(let i=0; i<s.length; i++){
        const temp=s[i];
        if(stack.length&&(stack[stack.length-1]==="A"&&temp==="B"||stack[stack.length-1]==="C"&&temp==="D")){
            stack.pop();
        }else{
            stack.push(temp);
        }
    }
    return stack.length;
};