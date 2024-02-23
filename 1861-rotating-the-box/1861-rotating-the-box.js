/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
    const sorted=[];
    
    box.forEach(row=>{
        const obSplitArr=row.join("").split("*").map(el=>el.split("").sort((a,b)=>{
            if(b==="."){
                return 1;
            }
            if(a==="."){
                return -1;
            }
            return 1;
        }).join("")).join("*").split("");
        sorted.push(obSplitArr);
    });
    const m=sorted.length;
    const n=sorted[0].length;
    console.log(sorted);
    const answer=new Array(n).fill().map(()=>new Array(m).fill(""));
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            answer[j][m-i-1]=sorted[i][j]
        }
    }
    return answer;
};