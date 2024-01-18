/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    const answer=[];
    const map=new Map();
    const queue=[[root,0]];
    while(queue.length!==0){
        const [node,dep]=queue.shift();
        if(!node){
            continue;
        }
        if(!map.has(dep)){
            map.set(dep,[]);
        }
        map.get(dep).push(node.val);
            queue.push([node.left,dep+1]);
            queue.push([node.right,dep+1]);
    }
    for(let [key,arr] of map.entries()){
        if(key%2!==0){
            arr=arr.reverse();
        }
        answer.push(arr);
    }
    return answer;
};