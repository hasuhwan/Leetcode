/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    let answer=0;
    const map=new Map();
    manager.forEach((top,idx)=>{
        if(top===-1){
            return;
        }
        if(!map.has(top)){
            map.set(top,[]);
        }
        map.get(top).push([idx,informTime[top]]);
    });
    function dfs(node,time){
        if(!map.has(node)){
            answer=Math.max(answer,time);
            return;
        }
        for(let [nextNode,addTime] of map.get(node)){
                dfs(nextNode,time+addTime);
            }
    }
    dfs(headID,0);
    return answer;
};



// /**
//  * @param {number} n
//  * @param {number} headID
//  * @param {number[]} manager
//  * @param {number[]} informTime
//  * @return {number}
//  */
// var numOfMinutes = function(n, headID, manager, informTime) {
//     let answer=0;
//     const map=new Map();
//     manager.forEach((top,idx)=>{
//         if(top===-1){
//             return;
//         }
//         if(!map.has(top)){
//             map.set(top,[]);
//         }
//         map.get(top).push([idx,informTime[top]]);
//     });
//     const queue=[[headID,0]];
//     while(queue.length!==0){
//      const [node,time]=queue.shift();
//         answer=Math.max(time,answer);
//         if(map.has(node)){
//             for(let [nextNode,addTime] of map.get(node)){
//                 queue.push([nextNode,addTime+time]);
//             }
//         }
//     }
//     return answer;
// };