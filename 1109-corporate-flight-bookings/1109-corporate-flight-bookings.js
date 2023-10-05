/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    const answer=new Array(n+2).fill(0);
    bookings.forEach(([start,end,cost])=>{
        answer[start]+=cost;
        answer[end+1]-=cost;
    });
    for(let i=1; i<answer.length; i++){
        answer[i]+=answer[i-1];
    }
    return answer.slice(1,answer.length-1)
};