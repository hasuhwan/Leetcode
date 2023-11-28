/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    const n=intervals.length;
    const answer=new Array(n).fill(-1);
    const map=new Map();
    const sorted=intervals.map((el,idx)=>[el[0],idx]).sort((a,b)=>a[0]-b[0]);
    console.log(sorted);
    intervals.forEach(([start,end],i)=>{
        if(map.has(end)){
            answer[i]=map.get(end);
        }else{
            let left=0;
            let right=n-1;
            let mid;
            while(left<=right){
                mid=Math.floor((left+right)/2);
                const [curr,idx]=sorted[mid];
                if(curr===end){
                    map.set(end,idx);
                    answer[i]=idx;
                    return;
                }else if(curr>end){
                    map.set(end,idx);
                    answer[i]=idx;
                    right=mid-1;
                }else{
                    left=mid+1;
                }
            }
        }
    });
    return answer;
};