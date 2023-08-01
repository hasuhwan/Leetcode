/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
    function div(arr){
        if(arr.length===1){
            return arr[0];
        }
        const next=[];
        let bool=false;
        for(let i=0; i<arr.length; i+=2){
            if(bool){
                next.push(Math.max(arr[i],arr[i+1]))
            }else{
                next.push(Math.min(arr[i],arr[i+1]));
            }
            bool=!bool
        }
        return div(next);
    }
    return div(nums);
};