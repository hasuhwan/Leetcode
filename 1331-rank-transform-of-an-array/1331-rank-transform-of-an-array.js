/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    if(arr.length===0){
        return [];
    }
    const answer=new Array(arr.length).fill(0);
    arr=arr.map((el,idx)=>[el,idx]).sort((a,b)=>a[0]-b[0]);
    answer[arr[0][1]]=1;
    let rank=1;
    for(let i=1; i<arr.length; i++){
        if(arr[i][0]===arr[i-1][0]){
            answer[arr[i][1]]=rank;
        }else{
            answer[arr[i][1]]=++rank;
        }
    }
    return answer;
};