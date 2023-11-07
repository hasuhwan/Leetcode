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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    const queue=[root];
    const val=root.val;
    while(queue.length!==0){
        const node=queue.shift();
        if(!node){
            continue;
        }
        if(node.val!==val){
            return false;
        }
        queue.push(node.left);
        queue.push(node.right);
    }
    return true;
};