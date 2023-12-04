/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
    let answer=-Infinity;
    const m=matrix.length;
    const n=matrix[0].length;
    
    for(let l=0; l<n; l++){
        const maxRowArr=new Array(m).fill(0);
        for(let r=l; r<n; r++){
            let max=-Infinity;
            let curr=0;
            
            for(let i=0; i<m; i++){
                maxRowArr[i]+=matrix[i][r];
                curr=Math.max(maxRowArr[i],curr+maxRowArr[i]);
                max=Math.max(max,curr);
            }
            if(max<=k){
                answer=Math.max(answer,max);
            }else{
                max=-Infinity;
                for(let i=0; i<m; i++){
                    let sum=0;
                    for(let j=i; j<m; j++){
                        sum+=maxRowArr[j];
                        if(sum<=k){
                            max=Math.max(max,sum);
                        }
                    }
                }
                answer=Math.max(max,answer);
            }
        }
    }
    return answer;
};


