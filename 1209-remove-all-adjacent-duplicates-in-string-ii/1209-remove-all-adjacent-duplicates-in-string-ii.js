/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    const stack=[];
    for(let i=0; i<s.length; i++){
        if(stack[stack.length-1]&&stack[stack.length-1][0]===s[i]){
            stack[stack.length-1][1]++;
        }else{
            stack.push([s[i],1]);
        }
        if(stack[stack.length-1][1]===k){
            stack.pop();
        }
    }
    let answer="";
    stack.forEach(([str,cnt])=>{
        answer+=str.repeat(cnt);
    });
    return answer;
};