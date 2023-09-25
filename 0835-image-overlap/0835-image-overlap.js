/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    let answer=0;
    const n=img1.length;
    const imgArr=[];
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(img1[i][j]===1){
                imgArr.push([i,j]);
            }
        }
    }
    
    for(let i=-n+1; i<n; i++){
        for(let j=-n+1; j<n; j++){
            let count=0;
            imgArr.forEach(([x,y])=>{
                const dirx=x+i;
                const diry=y+j;
                if(dirx<0||dirx>=n||diry<0||diry>=n||img2[dirx][diry]===0){
                    return;
                }
                count++;
            })
            answer=Math.max(answer,count);
        }
        
    }
    return answer;
};