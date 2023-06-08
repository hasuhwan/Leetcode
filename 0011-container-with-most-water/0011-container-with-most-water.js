/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let answer=0;
    let left=0;
    let right=height.length-1;
    while(left<right){
        const temp=Math.min(height[left],height[right])*(right-left);
        answer=Math.max(answer,temp);
        
        if(height[left]<height[right]){
            left++;
        }else{
            right--;
        }
    }
    return answer;
};