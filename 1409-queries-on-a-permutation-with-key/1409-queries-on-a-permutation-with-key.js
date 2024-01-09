/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
    const answer=[];
    const arr=new Array(m).fill().map((_,idx)=>idx+1);
    queries.forEach(num=>{
        const idx=arr.indexOf(num);
        answer.push(idx);
        const ex=arr.splice(idx,1)[0];
        arr.unshift(ex);
    });
    return answer;
};