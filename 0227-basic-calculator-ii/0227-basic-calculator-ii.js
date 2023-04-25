/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack=[];
    s=s.replace(/ /g,"");
    const regexp=new RegExp(/[\*\/\-]?[0-9]{1,}/,"g");
    let arr=s.match(regexp);
    arr.forEach(el=>{
        let temp;
if(el[0]==="*"){
    temp=stack.pop();
    stack.push(temp*Number(el.slice(1)));
}else if(el[0]==="/"){
    temp=stack.pop();
    stack.push(parseInt(temp/Number(el.slice(1))));
}else{
    stack.push(Number(el));
}
    })
return stack.reduce((acc,cur)=>acc+cur,0);
};