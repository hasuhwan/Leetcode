/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left=1;
    let right=Math.pow(10,9);
    let answer;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        let hours=0;
        piles.forEach(val=>{
            hours+=Math.ceil(val/mid);
        });
        if(hours<=h){
            right=mid-1;
            answer=mid;
        }else{
            left=mid+1;
        }
    }
    return answer;
};