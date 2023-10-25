/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let stack=[];
    for(let i=0; i<s.length; i++){
        if(s[i]==="i"){
            stack=stack.reverse();
        }else{
            stack.push(s[i]);
        }
    }
    return stack.join("");
};