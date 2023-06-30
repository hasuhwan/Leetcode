/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let answer=0;
    const min=k*threshold;
    let sum=arr.slice(0,k).reduce((acc,cur)=>acc+cur,0);
    if(sum>=min){
        answer++;
    }
    for(let i=k; i<arr.length; i++){
        sum=sum+arr[i]-arr[i-k];
        if(sum>=min){
            answer++;
        }
    }
    return answer;
};