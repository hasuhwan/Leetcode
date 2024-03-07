/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    const flat=grid.flat();
    const arr=new Array(flat.length+1).fill(0);
    arr[0]=1;
    flat.forEach(num=>{
        arr[num]++;
    });
    const answer=[0,0];
    arr.forEach((num,idx)=>{
        if(num===2){
            answer[0]=idx;
        }
        if(num===0){
            answer[1]=idx;
        }
    })
    return answer;
    
};