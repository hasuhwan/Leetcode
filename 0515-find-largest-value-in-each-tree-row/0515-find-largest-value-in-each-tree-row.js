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
var largestValues = function(root) {
    if(root===null){
        return [];
    }
    const map=new Map();
    const queue=[[root,1]];
    while(queue.length!==0){
        const [node,depth]=queue.shift();
        if(!map.has(depth)){
            map.set(depth,-Infinity);
        }
        if(map.get(depth)<node.val){
            map.set(depth,node.val);
        }
        if(node.left!==null){
            queue.push([node.left,depth+1]);
        }
        if(node.right!==null){
            queue.push([node.right,depth+1]);
        }
    }
    return [...map.values()];
    
};