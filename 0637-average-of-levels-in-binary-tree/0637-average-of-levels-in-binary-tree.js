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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const map=new Map();
    const queue=[[0,root]];
    while(queue.length!==0){
        const [dep,node]=queue.shift();
        if(!node){
            continue;
        }
        if(!map.has(dep)){
            map.set(dep,[]);
        }
        map.get(dep).push(node.val);
        queue.push([dep+1,node.left]);
        queue.push([dep+1,node.right]);
    }
    return [...map.values()].map(arr=>arr.reduce((acc,cur)=>acc+cur,0)/arr.length);
};