/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    function check(str){
        const stack=[];
        for(let i=0; i<str.length; i++){
            if(str[i]==="#"){
                stack.pop();
            }else{
                stack.push(str[i]);
            }
        }
        return stack.join("");
    }
    
    return check(s)===check(t);
};