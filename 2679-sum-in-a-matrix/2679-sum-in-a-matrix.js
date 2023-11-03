/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function(nums) {
    let answer=0;
    const sorted=nums.map(arr=>arr.sort((a,b)=>b-a));
    function rotate(arr){
        
        const m=arr.length;
        const n=arr[0].length;
        const rot=new Array(n).fill(0).map(()=>new Array(m).fill(0));
        for(let i=0; i<m; i++){
            for(let j=0; j<n; j++){
                rot[j][m-1-i]=arr[i][j]
            }
        }
        return rot;
    }
    const rot=rotate(sorted);
    rot.forEach((arr)=>{
        answer+=Math.max(...arr);
    });
    return answer;
};