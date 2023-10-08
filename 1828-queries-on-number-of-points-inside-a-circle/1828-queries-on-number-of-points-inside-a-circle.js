/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
//쿼리 별 내부에 위치 해 있는지 확인해야함.
var countPoints = function(points, queries) {
    const answer=[];
    queries.forEach(([x,y,r],idx)=>{
        let count=0;
        const max=Math.pow(r,2);
        points.forEach(([a,b])=>{
            const val=Math.pow(a-x,2)+Math.pow(b-y,2);
            if(val<=max){
                count++;
            }
        });
        answer.push(count);
    });
    return answer;
};