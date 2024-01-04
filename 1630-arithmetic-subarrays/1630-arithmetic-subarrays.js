/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    const answer=new Array(l.length).fill(true);
    
    for(let i=0; i<l.length; i++){
        const temp=nums.slice(l[i],r[i]+1);
        temp.sort((a,b)=>a-b);
        const val=temp[1]-temp[0];
        for(let j=2; j<temp.length; j++){
            if(temp[j]-temp[j-1]!==val){
                answer[i]=false;
                break;
            }
        }
    }
    return answer;
};