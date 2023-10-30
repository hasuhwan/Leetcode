/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return accounts.reduce((acc,cur)=>{
        const sum=cur.reduce((a,b)=>a+b,0);
        return acc>sum?acc:sum
    },0);
};