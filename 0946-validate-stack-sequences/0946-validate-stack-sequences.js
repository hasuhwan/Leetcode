/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack=[];
    let idx=0;
    while(idx!==popped.length){
        if(stack.length!==0&&stack[stack.length-1]===popped[idx]){
            stack.pop();
            idx++;
        }else if(pushed.length!==0){
            stack.push(pushed.shift());
        }else{
            return false;
        }
    }
    return true;
};