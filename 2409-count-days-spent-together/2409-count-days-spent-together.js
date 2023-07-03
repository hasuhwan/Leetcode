/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    let answer=0;
    const month=[0,31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for(let i=1; i<month.length; i++){
        month[i]+=month[i-1];
    }
    function exchange(arr){
        const temp=arr.map(el=>{
        const [mon,day]=el.split("-");
        return month[Number(mon-1)]+Number(day);
        });
        if(temp[1]<temp[0]){
            temp[1]+=365;
        }
        return temp;
    }
    
    const a=exchange([arriveAlice,leaveAlice]);
    const b=exchange([arriveBob,leaveBob]);
    console.log(a,b,month);
    for(let i=a[0]; i<=a[1]; i++){
        if(i>=b[0]&&i<=b[1]){
            answer++;
        }
    }
    return answer;
};