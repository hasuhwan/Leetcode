/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
let answer="";
    path=path.replace(/\/\//g,"/");
    const pathArr=[];
    const regexp=new RegExp(/[a-zA-Z0-9_]{1,}|.../);
    const splitArr=path.split("/");
for(let i=0 ; i<splitArr.length; i++){
    if(splitArr[i]===""){
        continue;
    }else if(regexp.test(splitArr[i])){
        console.log
        pathArr.push(splitArr[i]);
    }else if(splitArr[i]===".."){
        pathArr.pop();
    }
}
    console.log(pathArr);
    for(let i=0; i<pathArr.length; i++){
        answer+="/"+pathArr[i];
    }
    return answer.length===0?"/":answer;
    

    
};