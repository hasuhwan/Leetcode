/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const arr=new Array(s.length).fill(true);
    const stack=[];
    
    for(let i=0; i<s.length; i++){
        if(s[i]==="("){
            stack.push(i)
        }else if(s[i]===")"){
            if(stack.length===0){
                arr[i]=false;
            }else{
                stack.pop();
            }
        }
    }

    stack.forEach(el=>{arr[el]=false});
    let answer="";
    arr.forEach((el,idx)=>{
        if(el===true){
            answer+=s[idx];
        }
    });
    return answer;
};