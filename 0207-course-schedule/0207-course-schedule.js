/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const answer=[];
    const arr=new Array(numCourses).fill(0).map(()=>[]);
    const countArr=new Array(numCourses).fill(0);
    prerequisites.forEach(([after,before])=>{
        arr[before].push(after);
        countArr[after]++;
    });
    const queue=[];
    countArr.forEach((el,idx)=>{
        if(el===0){
            queue.push(idx);
        }
    });
    while(queue.length!==0){
        const temp=queue.shift();
        answer.push(temp);
        arr[temp].forEach(el=>{
            countArr[el]--;
            if(countArr[el]===0){
                queue.push(el);
            }
        });
    }
    return answer.length===numCourses?true:false;

};