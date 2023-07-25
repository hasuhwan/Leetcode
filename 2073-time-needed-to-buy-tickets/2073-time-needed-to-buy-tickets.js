/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let answer=0;
    let minus=0;
    let len=tickets.length;
    const arr=tickets.map((el,idx)=>[el,idx]).sort((a,b)=>a[0]-b[0]);
    for(let i=0; i<arr.length; i++){
        answer+=(arr[i][0]-minus)*len;
        minus+=arr[i][0]-minus;
        len--;
          if(arr[i][1]===k){
              let temp=0;
              for(let i=k+1; i<tickets.length; i++){
                  if(tickets[i]>=tickets[k]){
                      temp++;
                  }
              }
            return answer-temp;
        }
    };
    
};