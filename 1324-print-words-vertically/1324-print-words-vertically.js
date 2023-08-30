/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
    let maxLen=0;
    const arr=s.split(" ");
    arr.forEach(el=>{
        maxLen=Math.max(maxLen,el.length);
    });
    const originArr=new Array(arr.length).fill(0).map(()=>new Array(maxLen).fill(" "));
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            originArr[i][j]=arr[i][j];
        }
    }
   const answer=[];
    for(let i=0; i<originArr[0].length; i++){
        let str="";
        for(let j=0; j<originArr.length; j++){
            str+=originArr[j][i];
        }
        answer.push(str);
    }
    return answer.map(el=>el.replace(/\s*$/g,""));
    
};