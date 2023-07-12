/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const s=arr.length/4;
    let count=1;
    let prev=arr[0];
  if(count>s){
      return prev;
  }
    for(let i=1; i<arr.length; i++){
        if(arr[i]===arr[i-1]){
            count++;
        }else{
            prev=arr[i];
            count=1;
        }
        if(count>s){
            return prev;
        }
    }
};