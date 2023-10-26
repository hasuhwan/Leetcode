/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    const arr=new Array(1001).fill(0);
    trips.forEach(([num,from,to])=>{
        arr[from]+=num;
        arr[to]-=num;
    });
    for(let i=1; i<arr.length; i++){
        arr[i]+=arr[i-1];
    }
    return Math.max(...arr)<=capacity;
    
};