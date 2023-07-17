/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack=[];
    tokens.forEach(el=>{
        if(!isNaN(el)){
            stack.push(parseInt(el));
        }else{
            const two=stack.pop();
            const one=stack.pop();
            let cal=0;
            if(el==="+"){
                cal=one+two;
            }else if(el==="-"){
                cal=one-two;
            }else if(el==="*"){
                cal=one*two;
            }else{
                cal=parseInt(one/two);
            }
            stack.push(cal);
        }
    });
    return stack[0];
};