/**
 * @param {number[]} nums
 * @return {number}
 */
var findScore = function(nums) {
    const arr= nums.map((el,idx)=>[el,idx]).sort((a,b)=>a[0]-b[0]);
    const set=new Set();
    let answer=0;
    for(let i=0; i<arr.length; i++){
        if(!set.has(arr[i][1])){
            
            answer+=arr[i][0];
            set.add(arr[i][1]);
            set.add(arr[i][1]-1);
            set.add(arr[i][1]+1);
        }
    }
    return answer;
    
};