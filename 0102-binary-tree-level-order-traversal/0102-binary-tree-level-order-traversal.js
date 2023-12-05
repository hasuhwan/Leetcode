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
var levelOrder = function(root) {
    const map=new Map();
    
    if(!root){
        return [];
    }
    const queue=[[root,0]];
    while(queue.length!==0){
        const [node,dep]=queue.shift();
        if(!map.has(dep)){
            map.set(dep,[]);
        }
        map.get(dep).push(node.val);
        if(node.left){
            queue.push([node.left,dep+1]);
        }
        if(node.right){
            queue.push([node.right,dep+1]);
        }
    }
    return [...map.values()];
};