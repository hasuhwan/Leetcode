/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
var maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
    //초기 박스이면서 열려있는 경우를 큐에 넣는다.
    //찾은 박스 배열을 만든다.
    //찾은 열쇠 배열을 만든다.
    //매번 비교를 통해 일치하는 애들을 큐에 넣고 큐가 없을 때 까지 반복한다.
    const len=status.length;
    const findKey= new Array(len).fill(false);
    const findBox= new Array(len).fill(false);
    const visited= new Array(len).fill(false);
    const queue=[];
    let answer=0;
    for(let i=0; i<len; i++){
        if(status[i]===1){
            findKey[i]=true;
        }
        if(initialBoxes.includes(i)){
            findBox[i]=true;
        }
    }
    for(i=0; i<len; i++){
        if(findKey[i]&&findBox[i]){
            queue.push([i,candies[i]]);
            visited[i]=true;            
        }
    }
        while(queue.length!==0){
            const [idx,candy]=queue.shift();
            answer+=candy;
            for(let i=0; i<containedBoxes[idx].length; i++){
                findBox[containedBoxes[idx][i]]=true;
            }
            for(let i=0; i<keys[idx].length; i++){
                findKey[keys[idx][i]]=true;
            }
            for(let i=0; i<len; i++){
                if(findBox[i]&&findKey[i]&&!visited[i]){
                    queue.push([i,candies[i]]);
                    visited[i]=true;
                }
            }
            
        }
    return answer;
};